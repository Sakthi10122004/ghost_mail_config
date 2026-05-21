const debug = require('@tryghost/debug')('web:admin:app');
const path = require('path');
const express = require('../../../shared/express');
const serveStatic = express.static;
const config = require('../../../shared/config');
const urlUtils = require('../../../shared/url-utils');
const shared = require('../shared');
const errorHandler = require('@tryghost/mw-error-handler');
const sentry = require('../../../shared/sentry');
const redirectAdminUrls = require('./middleware/redirect-admin-urls');
const bridge = require('../../../bridge');

/**
 *
 * @returns {import('express').Application}
 */
module.exports = function setupAdminApp() {
    debug('Admin setup start');
    
    // ... Ghost modules loaded above ...

const adminApp = express('admin');

// ─── UNIVERSAL MULTI-PROVIDER SMTP/MAILGUN/SES SYNC ENGINE ───────────────
const fs = require('fs');
const path = require('path');
const ghostRootPath = path.join(config.get('paths:contentPath'), '..');
const configFilePath = path.join(ghostRootPath, 'config.development.json');

adminApp.use('/v6-setup-smtp-direct-write', (req, res) => {
    let bodyChunks = [];
    req.on('data', chunk => bodyChunks.push(chunk));
    req.on('end', () => {
        try {
            const payload = JSON.parse(Buffer.concat(bodyChunks).toString());
            if (!fs.existsSync(configFilePath)) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ success: false, error: 'Target config missing' }));
            }

            let configData = JSON.parse(fs.readFileSync(configFilePath, 'utf8'));
            const provider = payload.provider;

            // 1. CASE: SMTP / Gmail Configuration
            if (provider === 'SMTP') {
                configData.mail = {
                    transport: "SMTP",
                    options: {
                        service: payload.host.includes('gmail.com') ? "Gmail" : undefined,
                        host: payload.host,
                        port: parseInt(payload.port) || 465,
                        secure: parseInt(payload.port) === 465,
                        auth: {
                            user: payload.user,
                            pass: payload.pass
                        }
                    }
                };
            } 
            // 2. CASE: Mailgun REST API Configuration
            else if (provider === 'Mailgun') {
                configData.mail = {
                    transport: "Mailgun",
                    options: {
                        apiKey: payload.apiKey,
                        domain: payload.domain
                    }
                };
                if (payload.region === 'EU') {
                    configData.mail.options.region = 'EU';
                }
            } 
            // 3. CASE: Amazon SES Configuration
            else if (provider === 'SES') {
                configData.mail = {
                    transport: "SES",
                    options: {
                        AWSAccessKeyID: payload.awsAccessKey,
                        AWSSecretKey: payload.awsSecretKey,
                        region: payload.awsRegion
                    }
                };
            }

            fs.writeFileSync(configFilePath, JSON.stringify(configData, null, 2), 'utf8');
            console.log(`✓ Config file successfully updated with native ${provider} structural mappings.`);
            
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ success: true }));
        } catch(e) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ success: false, error: e.message }));
        }
    });
});
// ─── END UNIVERSAL MULTI-PROVIDER SYNC ENGINE ────────────────────────────

// ... Rest of original Ghost routes follow below ...


    // Admin assets
    // @NOTE: when we start working on HTTP/3 optimizations the immutable headers
    //        produced below should be split into separate 'Cache-Control' entry.
    //        For reference see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#validation_2

    adminApp.use('/assets', serveStatic(
        path.join(config.get('paths').adminAssets, 'assets'), {
            // @NOTE: the maxAge config passed below are in milliseconds and the config
            //        is specified in seconds. See https://github.com/expressjs/serve-static/issues/150 for more context
            maxAge: config.get('caching:admin:maxAge') * 1000,
            immutable: true,
            fallthrough: false
        }
    ));

    // Auth Frame renders a HTML page that loads some JS which then makes an API
    // request to the Admin API /users/me/ endpoint to check if the user is logged in.
    //
    // Used by comments-ui to add moderation options to front-end comments when logged in.
    adminApp.use('/auth-frame', bridge.ensureAdminAuthAssetsMiddleware(), function authFrameMw(req, res, next) {
        // only render content when we have an Admin session cookie,
        // otherwise return a 204 to avoid JS and API requests being made unnecessarily
        try {
            if (req.headers.cookie?.includes('ghost-admin-api-session')) {
                next();
            } else {
                res.setHeader('Cache-Control', 'public, max-age=0');
                res.sendStatus(204);
            }
        } catch (err) {
            next(err);
        }
    }, serveStatic(
        path.join(config.getContentPath('public'), 'admin-auth')
    ));

    // Ember CLI's live-reload script
    if (config.get('env') === 'development') {
        adminApp.get('/ember-cli-live-reload.js', function emberLiveReload(req, res) {
            res.redirect(`http://localhost:4200${urlUtils.getSubdir()}/ghost/ember-cli-live-reload.js`);
        });
    }

    // Force SSL if required
    // must happen AFTER asset loading and BEFORE routing
    adminApp.use(shared.middleware.urlRedirects.adminSSLAndHostRedirect);

    // Add in all trailing slashes & remove uppercase
    // must happen AFTER asset loading and BEFORE routing
    adminApp.use(shared.middleware.prettyUrls);

    // Cache headers go last before serving the request
    // Admin is currently set to not be cached at all
    adminApp.use(shared.middleware.cacheControl('private'));

    // Special redirects for the admin (these should have their own cache-control headers)
    adminApp.use(redirectAdminUrls);

    // Finally, routing
    adminApp.get('*', require('./controller'));

    adminApp.use(function fourOhFourMw(err, req, res, next) {
        if (err.statusCode && err.statusCode === 404) {
            // Remove 404 errors for next middleware to inject
            next();
        } else {
            next(err);
        }
    });
    adminApp.use(errorHandler.pageNotFound);
    adminApp.use(errorHandler.handleHTMLResponse(sentry));

    debug('Admin setup end');

    return adminApp;
};
