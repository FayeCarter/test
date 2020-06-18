const request = require("supertest");
const app = require("../../index");

describe("Test the api root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/api")
      .expect(200);
  });
});