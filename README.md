# Uber Hack to monitor prices

Uber's browser API endpoints HACK - reverse engineered Uber API endpoints and userful commands

Tamnil Saito Junior <tamnil@gmail.com>

### WARNING:

This is a reverse engineered endpoint's hack and it's not based on oficial api!!!
Can be deprecated or blocked by UBER without advice


## Description
based on browser's API endpoint behavior to get info about uber locations and taxes.

## Install

- copy .env.sample to .env
- set environment variables in .env:

   ```
    NODE_UBER_COOKIE_SID=
    NODE_UBER_COOKIE_CSID=

    ```

###    How to get these values:
    log into uber and open devTools
    you can get the sid and csid in application->cookie tab  or typing "document.cookie" in console tab




session cookies

sid, csid

 get the above data from a browser


## endpoint:

https://m.uber.com/api/getFareEstimates'

https://m.uber.com/api/locationAutocomplete

query: "campinas"
locale: "en-US"

https://m.uber.com/api/getStatus

uuid: "111d1111-1df1-11f1-b111-b111b111aeeb"
latitude: 0
longitude: 0





