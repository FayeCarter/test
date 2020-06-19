const request = require("supertest");
const server = require("../../index");

describe("Test the api login route", () => {
  test("GET should should redirect", (done) => {
    request(server)
          .get('/api/login')
          .expect('Location', /accounts.spotify.com/)
          .expect(302, done);
  });
  
});
