//
// post data to get rates
// based on request in 02-01-2019
//

const config = require("../config"),
    url = {
        getFareEstimates: "/api/getFareEstimates",
        locationAutocomplete: "/api/locationAutocomplete",
        getLocationDetails: "/api/getLocationDetails",
        getStatus: "/api/getStatus",
        getAppData: "/api/getAppData",
        getNavigation: "/api/getNavigation"
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
    url: `${config.uberUrl}${url.getFareEstimates}`,

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
    url: `${config.uberUrl}${url.locationAutocomplete}`,
    data: {
        locale,
        query: location
    }
});

const getLocationDetails = (id, provider = "google_places") => ({
    // defaultData,
    url: `${config.uberUrl}${url.getLocationDetails}`,
    data: {
        locale,
        id,
        provider
    }
});

const getStatus = (uuid="", latitude = 0, longitude = 0) => ({
    defaultData,
    url: `${config.uberUrl}${url.getStatus}`,
    data: {
        uuid,
        latitude,
        longitude
    }
});
const getAppData = () => ({
    defaultData,
    url: `${config.uberUrl}${url.getAppData}`,
    data: {}
});

const getNavigation = (pickupLocation, destination) => ({
    defaultData,
    url: `${config.uberUrl}${url.getNavigation}`,
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
