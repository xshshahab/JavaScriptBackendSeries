function understandingModule() {
  console.log("Let's understand the module!");
}

function greetWithSum(text, a, b) {
  return `${text}, Sum of a and b is : ${a + b}`;
}

module.exports = {
  understandingModule,
  greetWithSum,
};
