const fs = require("fs");
const readFileData = fs.readFileSync("./Temp.txt", "utf-8");

console.log("Before reading...");

setTimeout(() => {
  console.log("Reading with sync: ", readFileData);
}, 3000);

console.log("after reading...");
