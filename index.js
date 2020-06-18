const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express()

app.get("/api", cors(), async (req, res, next) => {
  res.status(200).send("Hello World!");
})

const PORT = process.env.PORT 

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})

module.exports = app;