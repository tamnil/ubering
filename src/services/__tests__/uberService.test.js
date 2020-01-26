const app = require("../uberService");

const timeout = 5e4;
jest.setTimeout(timeout);

describe("Main endpoints", () => {
    describe("test getFareEstimates", () => {
        const origin = [-22.8745132, -47.0494196],
            dest = [-22.9088671, -47.0553481];

        beforeAll(() => {});
        it("should connect to uber", async () => {
            let a = await app.getFareEstimates(origin, dest);
            expect(a.status).toBe("success");
        });
    });

    describe("test locationAutocomplete", () => {
        let myOrigin, locationsResponse, firstLocationElement;
        const myCity = "campinas";

        beforeAll(async () => {
            myOrigin = await app.locationAutocomplete(myCity);
            locationsResponse = myOrigin.data.locations.locations;
            firstLocationElement = locationsResponse[0].location;
        });
        it("should get location Campinas", () => {
            expect(typeof locationsResponse).toBe("object");
            expect(firstLocationElement.addressLine1).toBe("Campinas");
            expect(firstLocationElement.id).toBe("ChIJJWNL5x3GyJQRKsJ4IWo65Rc");
        });
    });

    describe("test getLocationDetails", () => {
        const locationId = "ChIJJWNL5x3GyJQRKsJ4IWo65Rc";
        let myLocationDetails;

        beforeAll(async () => {
            myLocationDetails = await app.getLocationDetails(
                locationId,
                "Campinas",
                "State of São Paulo, Brazil"
            );
        });
        it("should get location Details Campinas", () => {});
    });

    describe("test getAppdData ", () => {
        let appData;

        beforeAll(async () => {
            appData = await app.getAppData();
        });
        it("should get App Data", () => {});
    });

    describe("test getStatus ", () => {
        let status;

        beforeAll(async () => {
            status = await app.getStatus();
        });
        it("should get status", () => {});
    });
});
describe("Secondary functions", () => {
    describe("test getUUID ", () => {
        let uuid;

        beforeAll(async () => {
            uuid = await app.getUuid();
        });
        it("uuid shoud have length= 36", () => {
            expect(uuid.length).toBe(36);
        });
    });
    describe("location id", () => {
        let location;

        beforeAll(async () => {
            location = await app.getLocations("paulinia");
        });

        it("get the location id", () => {
            console.log(location);
        });
    });
});
describe("******** WARZONE !!! - development area", () => {
    describe("get Lat,lon from locationa name - first choice -select", () => {
        let locationOrigin,
            locationDestination,
            locationOriginDetails,
            locationDestinationDetails,
            locationOriginId,
            locationDestinationId,
            locationOriginCoordinates,
            locationDestinationCoordinates;

        beforeAll(async () => {
            locationOrigin = await app.locationAutocomplete("sao paulo");
            locationDestination = await app.locationAutocomplete("campinas");
            locationOriginId = locationOrigin.data.locations.locations[0].location.id;
            locationDestinationId =
        locationDestination.data.locations.locations[0].location.id;

            locationOriginDetails = await app.getLocationDetails(locationOriginId);
            locationDestinationDetails = await app.getLocationDetails(
                locationDestinationId
            );
            locationOriginCoordinates = locationOriginDetails.data.coordinate;
            locationDestinationCoordinates =
        locationDestinationDetails.data.coordinate;

            console.log(locationOriginCoordinates, locationDestinationCoordinates);
            // locationdetails = await app.getLocationDetails();
        });
        it("", () => {
            // expect(uuid.length).toBe(36);
        });
    });
});
// describe("")
