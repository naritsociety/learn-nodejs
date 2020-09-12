const express = require("express");
const app = express();

const datas = [
  { id: 1, station: "bangkok", temp: 34 },
  { id: 1, station: "chiang mai", temp: 36 },
  { id: 3, station: "saraburi", temp: 32 },
];

app.get("/", (req, res) => {
  res.end("Hello World!");
});

app.get("/api/data", (req, res) => {
  res.send(datas);
});

app.get("/api/data/:id", (req, res) => {
  const data = datas.find((c) => c.id === parseInt(req.params.id));
  if (!data) res.status(404).send("Station not found");
  res.send(data);
});

app.listen(5000, () => {
  console.log("App listening on port 5000");
});
