//
// post data to get rates
// based on request in 02-01-2019
//

const config = require("../config"),
    url = {
        getFareEstimates: `${config.uberUrl}/api/getFareEstimates`,
        locationAutocomplete: `${config.uberUrl}/api/locationAutocomplete`,
        getLocationDetails: `${config.uberUrl}/api/getLocationDetails`,
        getStatus: `${config.uberUrl}/api/getStatus`,
        getAppData: `${config.uberUrl}/api/getAppData`,
        getNavigation: `${config.uberUrl}/api/getNavigation`
    },
    locale = "en-us",
    defaultData = {
        cookies: {
            sid: config.sid,
            csid: config.csid
        }
    };

const getFareEstimates = (origin, dest) => ({
    defaultData,
    url: url.getFareEstimates,

    data: {
        locale,
        pickupLocation: {
            latitude: origin[0],
            longitude: origin[1]
        },
        destination: {
            latitude: dest[0],
            longitude: dest[1]
        }
    }
});

const locationAutocomplete = location => ({
    // defaultData,
    url: url.locationAutocomplete,
    data: {
        locale,
        query: location
    }
});

const getLocationDetails = (id, provider = "google_places") => ({
    // defaultData,
    url: url.getLocationDetails,
    data: {
        locale,
        id,
        provider
    }
});

const getStatus = (uuid="", latitude = 0, longitude = 0) => ({
    defaultData,
    url: url.getStatus,
    data: {
        uuid,
        latitude,
        longitude
    }
});
const getAppData = () => ({
    defaultData,
    url: url.getAppData,
    data: {}
});

const getNavigation = (pickupLocation, destination) => ({
    defaultData,
    url: url.getNavigation,
    data: {
        pickupLocation,
        destination
    }
});
module.exports = {
    getFareEstimates,
    locationAutocomplete,
    getLocationDetails,
    getStatus,
    getAppData,
    getNavigation
};
