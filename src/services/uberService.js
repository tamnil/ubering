const axios = require("axios");
const postData = require("./uberPostData");
const config = require("../config");

const prepareAxiosRequest = prepare =>
    axios(
        {
            method: "post",
            url: prepare.url,
            data: prepare.data,
            headers: config.headers
        },
        prepare
    ).then(res => res);

/**
 * getFareEstimates
 *
 * gets Data from uber for ride
 *
 * @name getFareEstimates
 * @function
 * @param [lat,lon] origin
 * @param [lat,lon] dest
 */

const getFareEstimates = (origin, dest) =>
    prepareAxiosRequest(postData.getFareEstimates(origin, dest));

const locationAutocomplete = location =>
    prepareAxiosRequest(postData.locationAutocomplete(location));

const getLocationDetails = location =>
    prepareAxiosRequest(postData.getLocationDetails(location));

const getStatus = () => {};

const exportedModules = {
    getFareEstimates,
    getStatus,
    locationAutocomplete,
    getLocationDetails
};

/*
* footnotes:
https://m.uber.com/api/locationAutocomplete

https://m.uber.com/api/getLocationDetails
{"id":"xxxxxxxx5x3xxxxxxxx4xxx65xx","addressLine1":"Campinas","addressLine2":"State of São Paulo, Brazil","provider":"google_places","locale":"en-US"}


https://m.uber.com/api/getNavigation

query: "campinas"
locale: "en-US"

https://m.uber.com/api/getStatus

uuid: "111d1111-1df1-11f1-b111-b111b111aeeb"
latitude: 0
longitude: 0
*/

module.exports = exportedModules;
