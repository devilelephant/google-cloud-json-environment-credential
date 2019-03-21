# google-cloud-json-environment-credential

_Rationale_: For certain use cases it is convenient to configure an application with credentials directly passed as an environment variable.
The Google Cloud api currently doesn't (easily) support this, instead preferring you pass in a name of a local file containing the credential.

An example use case would be configuring a Docker image sing environment variables.

__Usage:__

```
let gc_config = require('google-cloud-json-environment-credential')

gc_config.configure()
```

The script expects the environment variable `GOOGLE_APPLICATION_CREDENTIALS_JSON` is set with the JSON credentials value.

It will then save the JSON to a temp file and set the Google Cloud Library's expected `GOOGLE_APPLICATION_CREDENTIALS` to point to it.

Kind of a hack, I know, but it's an easy way to configure your apps if you don't want to copy your credentials.json file everywhere.

__Notes:__

If the environment variable `GOOGLE_APPLICATION_CREDENTIALS` is set then the script is bypassed.
