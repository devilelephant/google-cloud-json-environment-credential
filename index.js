// Configure Google Cloud library with JSON credentials in an environment variable
const os = require('os'),
    fs = require('fs');

exports.configure = function () {
    // if standard GOOGLE_APPLICATION_CREDENTIALS is set bypass the script
    if (!process.env['GOOGLE_APPLICATION_CREDENTIALS']) {
        
        // Save JSON value passed in GOOGLE_APPLICATION_CREDENTIALS_JSON to a local file, and point to it
        const env_creds = process.env['GOOGLE_APPLICATION_CREDENTIALS_JSON']
        if (env_creds) {
            const creds_file = os.tmpdir() + '/credentials.json'
            fs.writeFileSync(creds_file, env_creds)
            process.env['GOOGLE_APPLICATION_CREDENTIALS'] = creds_file
        } else {
            throw new Error('WARN: Google application credentials not set in GOOGLE_APPLICATION_CREDENTIALS_JSON or GOOGLE_APPLICATION_CREDENTIALS')
        }
    }
}
