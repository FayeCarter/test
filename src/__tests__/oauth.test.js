const request = require("supertest");
const server = require("../../index");

describe("Test the api login route", () => {
  test("GET should should redirect", async () => {
    const res = await request(server).get("/api/login");
    expect(res.status).toBe(302);
  });
  
});
