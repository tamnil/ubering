//
// post data to get rates
// based on request in 02-01-2019
//


const config = require('../config'),
fareEndpoint = '/api/getFareEstimates'

const postData = (origin,dest) => ({
    url: `${config.uberUrl}${fareEndpoint}`,

    cookies: {
        sid: config.sid,
        csid: config.csid
    },
    data: {
        locale: "en-US",
        pickupLocation: {
            latitude: origin[0],
            longitude: origin[1]
        },
        destination: {
            latitude: dest[0],
            longitude: dest[1],
        }
    }
}
);

module.exports = postData;
