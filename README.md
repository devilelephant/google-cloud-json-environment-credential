# google-cloud-json-environment-credential

_Rationale_: Provides a few different options for configuring Google Cloud credetials.

__Usage:__

```
let gc_config = require('google-cloud-json-environment-credential')

gc_config.configure()

OR

gc_config.configure(<file path of local credentials.json>)
```

__Flow__

If the environment variable `GOOGLE_APPLICATION_CREDENTIALS` is set this script returns without doing anything.

If the environment variable `GOOGLE_APPLICATION_CREDENTIALS_JSON` is set, this script will save the JSON to a local temp file and set GOOGLE_APPLICATION_CREDENTIALS with that file's path.

If the optional `credentialsJsonFile` parameter is passed to this script it will set `GOOGLE_APPLICATION_CREDENTIALS` to that value.

If none of the above apply `GOOGLE_APPLICATION_CREDENTIALS` will be set to `credentials.json` and hope for the best.
