const greet = require("./greet.js");
const understandModule = require("./moduleUnderStanding.js");
const mathModule = require("./mathUtils.js");

greet();
let res = understandModule.greetWithSum("Hey Dev", 19, 21);
console.log(res);

understandModule.understandingModule();

// math

console.log("Addition: ", mathModule.add(1, 2));
