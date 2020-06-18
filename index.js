const express = require("express");
const cors = require("cors");
const request = require('request')
const querystring = require('querystring')

const app = express()

require("dotenv").config();

const redirect_uri = process.env.REDIRECT_URI


app.get("/api", cors(), async (req, res) => {
  res.status(200).send("Hello World!");
})

app.get('/api/login', cors(), function(req, res) {
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.CLIENT_ID,
      scope: 'user-read-private user-read-email',
      redirect_uri
    }))
  });

module.exports = app;
