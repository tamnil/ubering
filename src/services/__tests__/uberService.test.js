const app = require("../uberService");

describe("init", () => {
    beforeAll(() => {});
    it("should connect to uber", async () => {
        const origin = [-22.8745132, -47.0494196],
            dest = [-22.9088671, -47.0553481];
        let a = await app.getFareEstimates(origin, dest);
        expect(a.data.status).toBe("success");
    });
});
