const jsonData = require("../json/greeting.json");

function englishGreet() {
  console.log("English => JSON : " + jsonData.en);
}

module.exports = englishGreet;
