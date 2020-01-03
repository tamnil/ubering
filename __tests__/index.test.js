const app = require("../index");
describe("init", () => {
    it("should connect to uber", async () => {
        let a = await app;
        expect(a.data.status).toBe('success');
    });
});
