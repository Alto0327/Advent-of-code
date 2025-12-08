const fs = require("fs")

const text = fs.readFileSync("./data.txt", "utf8");

console.log(text)