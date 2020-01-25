# Uber Hack -- bowser and mobile api

Uber's browser API endpoints HACK - reverse engineered Uber API endpoints and userful commands

Tamnil Saito Junior <tamnil@gmail.com>

### WARNING!!!: Misuse can leak you personal data and some bad behaviors in UBER's app

#### Novices keep out!!!

This is a reverse engineered endpoint's hack and it's not based on oficial api!!!
Can be deprecated or blocked by UBER without advice



## Description
based on browser's API endpoint behavior to get info about uber locations and taxes.


### Available Functions:

- getFareEstimates(origin, destination)
- locationAutocomplete(location)
- getLocationDetails(location)


## Install

- clone from https://github.com/tamnil/uber-trend-hack
- run "npm install"
- copy .env.sample to .env
- set environment variables in .env:

   ```
    NODE_UBER_COOKIE_SID=
    NODE_UBER_COOKIE_CSID=

    ```

###    How to get these values:
    log into uber and open devTools
    you can get the sid and csid in application->cookie tab  or typing "document.cookie" in console tab




### Tests

- intall and set up "sid" and "csid" enviroment variables
- run "jest" or "npm test"





## Notes:


### some sketeches for dev propouses

#### https://m.uber.com/api/getFareEstimates'
get estimates and other data

#### https://m.uber.com/api/locationAutocomplete

query: "campinas"
locale: "en-US"

#### https://m.uber.com/api/getStatus

uuid: "111d1111-1df1-11f1-b111-b111b111aeeb"
latitude: 0
longitude: 0


#### https://m.uber.com/api/getAppData



#### https://m.uber.com/api/getAccelerators

returns saved places and personal history

id
addressLine1:
addressLine2:
provider:
locale:

#### https://m.uber.com/api/getNavigation

get maps details

## Copyright

### Again! this can lead to data leakages and other unwanted behaviors

#### THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
