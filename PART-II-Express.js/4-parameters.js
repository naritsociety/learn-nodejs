const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end("Hello World!");
});

app.get("/api/sensors/:id", (req, res) => {
  res.send(req.params.id);
});

app.listen(5000, () => {
  console.log("App listening on port 5000");
});
