const express = require("express");
const router = express.Router();
const request = require("request")
const querystring = require("querystring")
const cors = require("cors");

require("dotenv").config();

const redirect_uri = process.env.REDIRECT_URI

router.get("/api", cors(), async (req, res) => {
  res.status(200).send("Hello World!");
})

router.get('/api/login', cors(), function(req, res) {
  res.redirect("https://accounts.spotify.com/authorize?" +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.CLIENT_ID,
      scope: "user-read-private user-read-email",
      redirect_uri
    }))
  });

router.get("/api/login/callback", function(req, res) {
  let code = req.query.code || null
  let authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri,
      grant_type: "authorization_code"
    },
    headers: {
      "Authorization": "Basic " + (Buffer.from(
        process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
      ).toString('base64'))
    },
    json: true
  }
  request.post(authOptions, function(error, response, body) {
    var access_token = body.access_token
    let uri = "http://localhost:3000/user"
    res.redirect(uri + "?access_token=" + access_token)
  })
})

module.exports = router;