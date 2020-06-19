const request = require("supertest");
const server = require("../server");

describe("Spotify OAuth redirection", () => {
  test("GET /api/login should should redirect", (done) => {
    request(server)
          .get("/api/login")
          .expect("Location", /accounts.spotify.com/)
          .expect(302, done);
  });
  
  test("GET /api/login/callback should should redirect", (done) => {
    request(server)
          .get("/api/login/callback")
          .expect("Location", /localhost:3000\/user/ )
          .expect(302, done);
  });
});
