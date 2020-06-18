const request = require("supertest");
const server = require("../../index");

describe("Test the api root path", () => {
  
  test("It should respond to the GET method", async () => {
    const res = await request(server).get("/api");
    expect(res.status).toBe(200);
  });
  
});
