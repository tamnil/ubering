const app = require("../uberService");

const timeout = 3e4;

describe("test getFareEstimates", () => {
    const origin = [-22.8745132, -47.0494196],
        dest = [-22.9088671, -47.0553481];

    beforeAll(() => {});
    it("should connect to uber", async () => {
        let a = await app.getFareEstimates(origin, dest);
        expect(a.data.status).toBe("success");
    });
},timeout);

describe("test locationAutocomplete", () => {
    let myOrigin, locationsResponse, firstLocationElement;
    const myCity = "campinas";

    beforeAll(async () => {
        myOrigin = await app.locationAutocomplete(myCity);
        locationsResponse = myOrigin.data.data.locations.locations;
        firstLocationElement = locationsResponse[0].location;
    });
    it("should get location Campinas", () => {
        expect(typeof locationsResponse).toBe("object");
        expect(firstLocationElement.addressLine1).toBe("Campinas");
        expect(firstLocationElement.id).toBe("ChIJJWNL5x3GyJQRKsJ4IWo65Rc");
    });
},timeout);

describe("test getLocationDetails", () => {
    const locationId = "ChIJJWNL5x3GyJQRKsJ4IWo65Rc";
    let myLocationDetails;

    beforeAll(async () => {
        myLocationDetails = await app.getLocationDetails(locationId,"Campinas","State of São Paulo, Brazil");
console.log(myLocationDetails.data)
    });
    it("should get location Details Campinas", () => {
    // expect(typeof locationsResponse).toBe("object");
    // expect(firstLocationElement.addressLine1).toBe("Campinas");
    // expect(firstLocationElement.id).toBe("ChIJJWNL5x3GyJQRKsJ4IWo65Rc");
    });
},timeout);

// describe("")
