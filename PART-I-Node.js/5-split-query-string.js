const http = require("http");
const url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    const q = url.parse(req.url, true).query;
    const txt = "Temperature: " + q.temp + " " + "<br />Humidity: " + q.humid;
    res.end(txt);
  })
  .listen(5000);

//URL http://localhost:5000/?temp=34&humid=65
