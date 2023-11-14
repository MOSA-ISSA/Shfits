const http = require("http");
const app = require("./App");

// const port = 2999;//local
const port = process.env.port||2999;//not local


const server = http.createServer(app);

module.exports = server;

app.listen(port);