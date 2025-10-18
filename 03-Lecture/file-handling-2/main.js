// Writting file

const fs = require("fs");

let msg = "Hello Meri jaanam.";

fs.writeFile("./Temp.txt", msg, (error) => {
  if (error) {
    console.log("ERROR! : ", error);
    throw new Error("Janam Error aa gayi!");
  }

  console.log("File created successfully!");
});
