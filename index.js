// Configure Google Cloud library with JSON credentials in an environment variable
const os = require('os'),
    fs = require('fs');

exports.configure = function (credentialsJsonFile) {
    // if standard GOOGLE_APPLICATION_CREDENTIALS is set bypass the script
    if (process.env['GOOGLE_APPLICATION_CREDENTIALS']) {
        return;
    }
    
    // if localCredsFile is passed use it
    if (credentialsJsonFile) {
        process.env['GOOGLE_APPLICATION_CREDENTIALS'] = credentialsJsonFile
        return;
    }
    
    // Save JSON value passed in GOOGLE_APPLICATION_CREDENTIALS_JSON to a local file, and point to it
    const env_creds = process.env['GOOGLE_APPLICATION_CREDENTIALS_JSON']
    if (env_creds) {
        const creds_file = os.tmpdir() + '/credentials.json'
        fs.writeFileSync(creds_file, env_creds)
        process.env['GOOGLE_APPLICATION_CREDENTIALS'] = creds_file
    } else {
        if (fs.existsSync('credentials.json')) {
            process.env['GOOGLE_APPLICATION_CREDENTIALS'] = 'credentials.json'
        } else {
            throw new Error('WARN: Google application credentials not set in GOOGLE_APPLICATION_CREDENTIALS_JSON or GOOGLE_APPLICATION_CREDENTIALS')
        }
    }
}
