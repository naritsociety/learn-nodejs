const http = require("http");
const dt = require("./2-my-module");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Current date and time are: " + dt.my_module());
    res.end("");
  })
  .listen(5000);
