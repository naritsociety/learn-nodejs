const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    station: "Bangkok",
    temperature: 35,
    humidity: 85,
  });
});
app.listen(5000, () => {
  console.log("App listening on port 5000");
});
