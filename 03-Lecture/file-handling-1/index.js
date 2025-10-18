// Reading the file
const fs = require("fs");

fs.readFile("./Temp.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    throw new Error("Found an error while reading the file.");
  }
});
