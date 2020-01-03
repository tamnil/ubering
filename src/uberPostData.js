//
// post data to get rates
// based on request in 02-01-2019
//
//
//
const config = require('./config/config')

const postData = {
    url: "https://m.uber.com/api/getFareEstimates",

    cookies: {
        sid: config.sid,
        csid: config.csid
    },
    data: {
        locale: "en-US",
        pickupLocation: {
            // id: "ChaddsaL5fgx3GgJ4Igo65Rc",
            // addressLine1: "Campinas",
            // addressLine2: "State of São Paulo",
            // provider: "google_places",
            // locale: "en",
            latitude: -22.8745132,

            longitude: -47.0494196
        },
        destination: {
            // id: "CYssdfeewg_FygJsQR1v9EP_Yr_ic",
            // addressLine1: "Av.  , 516",
            // addressLine2: "- Jardim , Campinas - SP",
            // provider: "google_places",
            // locale: "pt-BR",
            latitude: -22.9088671,
            longitude: -47.0553481,
        }
    // status: {
    //     status: {
    //         clientStatus: {
    //             status: "Looking",
    //             statusDescription: "Looking",
    //             lastRequestMsg: null,
    //             lastRequestNote: null,
    //             totalCompletedRidersTripsCount: 89,
    //             meta: {
    //                 lastModifiedTimeMs: 1578006466931
    //             }
    //         },
    //         eyeball: {
    //             nearbyVehicles: {},
    //             dynamicFares: {},
    //             nearbyAssets: {},
    //             meta: {
    //                 lastModifiedTimeMs: 1578006466931
    //             }
    //         },
    //         city: {
    //             cityName: "sekonditakoradi_and_cape_coast",
    //             cityId: "1800",
    //             countryIso2: "GH",
    //             isEmergencyLocationSharingAvailable: false,
    //             vehicleViews: {},
    //             vehicleViewsOrder: [],
    //             productTiersOrder: [
    //                 "SPECIAL",
    //                 "RECOMMENDED",
    //                 "POPULAR",
    //                 "ECONOMY",
    //                 "PREMIUM",
    //                 "EXTRA_SEATS",
    //                 "MORE"
    //             ],
    //             productGroups: [],
    //             meta: {
    //                 lastModifiedTimeMs: 1578006466904
    //             }
    //         },
    //         metadata: {
    //             targetLocationSynced: {
    //                 latitude: 0,
    //                 longitude: 0,
    //                 type: null,
    //                 ts: null
    //             },
    //             pollingIntervalMs: 4000
    //         }
    //     }
    // },
    // profileUUID: null,
    // profileType: null,
    // isScheduled: false
    }
};

module.exports = postData;
