const server = require("./index");

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})

module.exports = server;