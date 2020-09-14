const fs = require("fs");
const data = fs.readFileSync("input_text.txt");

console.log(data.toString());
console.log("Finish Job!");
