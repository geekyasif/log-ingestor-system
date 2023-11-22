const app = require("../app");
const request = require("supertest");
const generateRandomLog = require("../utils/generateRandomLog");
const dummyData = require("../utils/dummyJson");

describe("POST /api/ingest-log", () => {
  describe("Inserting the logs into the database", () => {
    it("should return 201", async () => {
      //
      for (let i = 0; i < 2; i++) {
        const body = generateRandomLog();
        try {
          //act
          const response = await request(app).post("/api/ingest").send(body);
          //assert
          expect(response.statusCode).toBe(201);
        } catch (error) {
          console.error(`Error ingesting log ${i + 1}:`, error.message);
        }
      }
    });
  });

  describe("Inserting Bulk dummy json", () => {
    it("should return 201", async () => {
      try {
        //
        const body = dummyData;
        //act
        const response = await request(app).post("/api/ingest").send(body);
        //assert
        expect(response.statusCode).toBe(201);
      } catch (error) {
        console.error(`Error ingesting log ${i + 1}:`, error.message);
      }
    });
  });

  describe("Invalid or missing fields", () => {
    it("should return 500", async () => {
      //
      const body = {
        level: "",
        message: "",
        resourceId: "server-1234",
        timestamp: "2023-09-15T08:00:00Z",
        traceId: "abc-xyz-123",
        spanId: "span-456",
        commit: "5e5342f",
        metadata: {
          parentResourceId: "server-0987",
        },
      };
      //act
      const response = await request(app).post("/api/ingest").send(body);
      //assert
      expect(response.statusCode).toBe(500);
    });
  });
});
