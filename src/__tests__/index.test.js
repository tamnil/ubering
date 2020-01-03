const app = require("../index");


before(() => {

        const origin = [-22.8745132, -47.0494196],
            dest = [-22.9088671, -47.0553481];

})

describe("init", () => {
    it("should connect to uber", async () => {
        let a = await app.getFareEstimates(origin, dest);
        expect(a.data.status).toBe("success");
    });
});
