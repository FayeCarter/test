const express = require("express");
const cors = require("cors");
const router = require("./router");
const path = require('path')

const app = express()

app.use(router);
app.use(express.static(path.join(__dirname, 'client/build')))

app.get('*', cors(), (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

module.exports = app;
