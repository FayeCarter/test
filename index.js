const server = require("./src/server");

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})

module.exports = server;