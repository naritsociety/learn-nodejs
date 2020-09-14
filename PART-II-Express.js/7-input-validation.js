const express = require("express");
const app = express();

app.use(express.json());

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

app.post("/api/data", (req, res) => {
  if (!req.body.station || req.body.station.length < 3) {
    res.status(400).send("Name is require and should be minimum 3 characters");
    return;
  }
  const data = {
    id: datas.length + 1,
    station: req.body.station,
  };
  datas.push(data);
  res.send(datas);
});

app.listen(5000, () => {
  console.log("App listening on port 5000");
});
