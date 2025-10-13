const jsonData = require("../json/greeting.json");

function arabicGreet() {
  console.log("Arabic => JSON : " + jsonData.ar);
}

module.exports = arabicGreet;
