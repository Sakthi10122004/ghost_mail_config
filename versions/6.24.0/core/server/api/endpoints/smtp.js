console.log("SMTP FILE LOADED");

/** @type {import('@tryghost/api-framework').Controller} */
const controller = {

    docName: 'smtp',

    test: {

        permissions: false,

        async query() {

            console.log("SMTP TEST HIT");

            return {
                success: true
            };
        }
    }
};

module.exports = controller;