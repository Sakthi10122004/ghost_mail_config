const debug = require('@tryghost/debug')('web:admin:controller');
const errors = require('@tryghost/errors');
const tpl = require('@tryghost/tpl');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const config = require('../../../shared/config');
const updateCheck = require('../../services/update-check');

module.exports = function adminController(req, res) {
    debug('index called');
    const templatePath = path.resolve(config.get('paths').adminAssets, 'index.html');
    const headers = {};

    try {
        updateCheck();
        let fileContent = fs.readFileSync(templatePath, 'utf8');

        const smtpScript = `
<script>
(function () {
    document.body.style.overflowY = 'auto';
    const style = document.createElement('style');
    style.innerHTML = \`
        html, body, main, .gh-flow, .gh-flow-content, .gh-signin, .gh-setup, .gh-canvas {
            overflow-y: auto !important; height: auto !important; max-height: none !important;
            overflow-x: hidden !important;
        }
        #smtp-custom-panel { padding-bottom: 20px; box-sizing: border-box; width: 100%; max-width: 100%; }
        .gh-select-custom {
            width: 100%; height: 40px; border: 1px solid #e5eff5; border-radius: 4px;
            padding: 0 10px; font-size: 1.2rem; background: white; margin-bottom: 12px;
            box-sizing: border-box;
        }
        .toggle-container-row {
            display: flex; align-items: center; justify-content: space-between; gap: 15px;
            margin-top: 25px; padding-top: 15px; border-top: 1px solid #e5eff5; text-align: left;
            box-sizing: border-box; width: 100%;
        }
        .toggle-label-block { display: flex; flex-direction: column; text-align: left; flex: 1; }
        .toggle-title { font-size: 1.3rem; font-weight: 600; color: #15171a; margin: 0; }
        .toggle-desc { font-size: 1.1rem; color: #738a94; margin: 2px 0 0 0; font-weight: 400; line-height: 1.4; }
        
        .switch-input {
            position: relative; display: inline-block; width: 46px; height: 26px; flex-shrink: 0;
        }
        .switch-input input { opacity: 0; width: 0; height: 0; }
        .slider-round {
            position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0;
            background-color: #e5eff5; transition: .3s; border-radius: 34px; border: 1px solid #e5eff5;
        }
        .slider-round:before {
            position: absolute; content: ""; height: 18px; width: 18px; left: 3px; bottom: 3px;
            background-color: white; transition: .3s; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        input:checked + .slider-round { background-color: #30cf43; border-color: #30cf43; }
        input:checked + .slider-round:before { transform: translateX(20px); }
        
        /* Box sizing enforcement to kill horizontal overflow scrollbars */
        #collapsible-mail-section input.gh-input {
            box-sizing: border-box !important;
            width: 100% !important;
        }
    \`;
    document.head.appendChild(style);

    function injectSmtpInputs() {
        if (!window.location.hash.includes('/setup') || document.getElementById('smtp-custom-panel')) return;

        const passwordInput = document.querySelector('input[type="password"]');
        if (!passwordInput) return;

        const container = passwordInput.closest('.form-group') || passwordInput.parentElement;
        const smtpWrapper = document.createElement('div');
        smtpWrapper.id = 'smtp-custom-panel';

        smtpWrapper.innerHTML = \`
            <div class="toggle-container-row">
                <div class="toggle-label-block">
                    <h3 class="toggle-title">Configure outbound mail for member sign-in</h3>
                    <p class="toggle-desc">Enable transactional emails for secure member sign-in and account authentication links.</p>
                </div>
                <label class="switch-input">
                    <input type="checkbox" id="email-toggle-checkbox">
                    <span class="slider-round"></span>
                </label>
            </div>

            <div id="collapsible-mail-section" style="display: none; margin-top: 20px; text-align: left; box-sizing: border-box; width:100%;">
                <h3 style="font-size:1.4rem;margin-bottom:16px;font-weight:600;color:#15171a;">Email Provider Configuration</h3>
                
                <div class="form-group">
                    <label style="font-weight:700;">Select Provider</label>
                    <select id="email-provider-select" class="gh-select-custom">
                        <option value="SMTP">SMTP (Gmail, Brevo, Custom Server)</option>
                        <option value="Mailgun">Mailgun (API Transport Mode)</option>
                        <option value="SES">Amazon SES</option>
                    </select>
                </div>

                <div id="dynamic-provider-fields" style="box-sizing:border-box; width:100%;"></div>
            </div>
        \`;

        container.after(smtpWrapper);

        const toggleCheckbox = document.getElementById('email-toggle-checkbox');
        const collapsibleSection = document.getElementById('collapsible-mail-section');
        const fieldsContainer = document.getElementById('dynamic-provider-fields');
        const providerSelect = document.getElementById('email-provider-select');

        toggleCheckbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                collapsibleSection.style.display = 'block';
            } else {
                collapsibleSection.style.display = 'none';
            }
        });

        function renderFields(provider) {
            if (provider === 'SMTP') {
                fieldsContainer.innerHTML = \`
                    <div style="display:flex; gap:10px; margin-bottom:12px; width:100%; box-sizing:border-box;">
                        <div class="form-group" style="flex:3; margin:0; min-width:0;">
                            <label style="font-weight:700;">Host</label>
                            <input type="text" id="smtp-host-field" placeholder="smtp.gmail.com" class="gh-input">
                        </div>
                        <div class="form-group" style="flex:1; margin:0; min-width:0;">
                            <label style="font-weight:700;">Port</label>
                            <input type="text" id="smtp-port-field" placeholder="465" class="gh-input">
                        </div>
                    </div>
                    <div class="form-group" style="margin-bottom:12px;">
                        <label style="font-weight:700;">Auth User ID</label>
                        <input type="text" id="smtp-user-field" placeholder="jamie@example.com" class="gh-input">
                    </div>
                    <div class="form-group" style="margin-bottom:12px;">
                        <label style="font-weight:700;">Auth Password</label>
                        <input type="password" id="smtp-pass-field" placeholder="Enter app password" class="gh-input">
                    </div>
                \`;
            } else if (provider === 'Mailgun') {
                fieldsContainer.innerHTML = \`
                    <div class="form-group" style="margin-bottom:12px;">
                        <label style="font-weight:700;">Mailgun API Key</label>
                        <input type="password" id="mg-api-field" placeholder="key-xxxxxxxxxxxxxxxxxxxxxxxx" class="gh-input">
                    </div>
                    <div class="form-group" style="margin-bottom:12px;">
                        <label style="font-weight:700;">Domain Domain Name</label>
                        <input type="text" id="mg-domain-field" placeholder="mg.yourdomain.com" class="gh-input">
                    </div>
                    <div class="form-group" style="margin-bottom:12px;">
                        <label style="font-weight:700;">Region</label>
                        <select id="mg-region-field" class="gh-select-custom">
                            <option value="US">United States (US)</option>
                            <option value="EU">European Union (EU)</option>
                        </select>
                    </div>
                \`;
            } else if (provider === 'SES') {
                fieldsContainer.innerHTML = \`
                    <div class="form-group" style="margin-bottom:12px;">
                        <label style="font-weight:700;">AWS Access Key ID</label>
                        <input type="text" id="aws-key-field" placeholder="AKIAIOSFODNN7EXAMPLE" class="gh-input">
                    </div>
                    <div class="form-group" style="margin-bottom:12px;">
                        <label style="font-weight:700;">AWS Secret Access Key</label>
                        <input type="password" id="aws-secret-field" placeholder="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY" class="gh-input">
                    </div>
                    <div class="form-group" style="margin-bottom:12px;">
                        <label style="font-weight:700;">AWS Region</label>
                        <input type="text" id="aws-region-field" value="us-east-1" class="gh-input">
                    </div>
                \`;
            }
        }

        renderFields('SMTP');

        providerSelect.addEventListener('change', (e) => {
            renderFields(e.target.value);
        });

        const submitBtn = document.querySelector('button[type="submit"]') || document.querySelector('.gh-btn-blue') || document.querySelector('button');
        if (submitBtn) {
            submitBtn.addEventListener('click', async () => {
                if (!toggleCheckbox.checked) {
                    console.log("Custom mail delivery configuration was skipped by the user.");
                    return;
                }

                const currentProvider = providerSelect ? providerSelect.value : 'SMTP';
                let payload = { provider: currentProvider };

                if (currentProvider === 'SMTP') {
                    payload.host = document.getElementById('smtp-host-field').value;
                    payload.port = document.getElementById('smtp-port-field').value;
                    payload.user = document.getElementById('smtp-user-field').value;
                    payload.pass = document.getElementById('smtp-pass-field').value;
                } else if (currentProvider === 'Mailgun') {
                    payload.apiKey = document.getElementById('mg-api-field').value;
                    payload.domain = document.getElementById('mg-domain-field').value;
                    payload.region = document.getElementById('mg-region-field').value;
                } else if (currentProvider === 'SES') {
                    payload.awsAccessKey = document.getElementById('aws-key-field').value;
                    payload.awsSecretKey = document.getElementById('aws-secret-field').value;
                    payload.awsRegion = document.getElementById('aws-region-field').value;
                }

                try {
                    await fetch('/v6-setup-smtp-direct-write', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                    console.log("✓ Dynamic mail configurations successfully synchronized to disk storage.");
                } catch (err) {
                    console.error("Mail sync error:", err);
                }
            });
        }
    }

    const observer = new MutationObserver(() => { injectSmtpInputs(); });
    observer.observe(document.body, { childList: true, subtree: true });
})();
</script>
`;

        fileContent = fileContent.replace('</body>', `${smtpScript}</body>`);
        const hashSum = crypto.createHash('md5');
        hashSum.update(fileContent);
        headers.ETag = hashSum.digest('hex');

        if (config.get('adminFrameProtection')) {
            headers['X-Frame-Options'] = 'sameorigin';
        }

        res.set(headers);
        res.send(fileContent);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new errors.IncorrectUsageError({
                message: tpl(messages.templateError.message, { templatePath }),
                context: tpl(messages.templateError.context),
                help: tpl(messages.templateError.help, { link: 'https://ghost.org/docs/install/source/' }),
                err
            });
        }
        throw err;
    }
};