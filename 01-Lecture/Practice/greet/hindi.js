const jsonData = require("../json/greeting.json");

function hindiGreet() {
  console.log("Hindi => JSON : " + jsonData.hi);
}

module.exports = hindiGreet;
