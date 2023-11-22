const app = require("../app");
const request = require("supertest");

describe("GET  /api/query", () => {
  describe("Full Text Search on Log level", () => {
    it("should return 200", async () => {
      //
      const query = "odyssey";
      //act
      const response = await request(app).get(`/api/search?query=${query}`);
      console.log("data", response._body.data);
      //assert
      expect(response.statusCode).toBe(200);
    });
  });
});
