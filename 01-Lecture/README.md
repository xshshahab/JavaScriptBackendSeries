## 📦 Module, `exports`, and `require` in Node.js

Node.js uses a **module system** to organize and reuse code. Each file in Node.js is treated as a **separate module**.

### 🔹 `module.exports`

`module.exports` is used to **export** functions, objects, or variables from a file so that they can be used in another file.

```js
// math.js
// Exporting functions using module.exports
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Export multiple functions as an object
module.exports = {
  add,
  subtract,
};
```

### 🔹 `require()`

`require()` is used to **import** modules, JSON, or other files in Node.js.

```js
// app.js
// Importing functions from math.js
const math = require("./math");

console.log(math.add(5, 3)); // Output: 8
console.log(math.subtract(10, 4)); // Output: 6
```

### 🔹 Exporting a Single Function or Value

You can also export just one thing directly.

```js
// greet.js
module.exports = function (name) {
  return `Hello, ${name}!`;
};

// app.js
const greet = require("./greet");
console.log(greet("Shahab")); // Output: Hello, Shahab!
```

### 🔹 Summary

| Term             | Description                            | Example                             |
| ---------------- | -------------------------------------- | ----------------------------------- |
| `module.exports` | Defines what a module exports          | `module.exports = myFunction;`      |
| `exports`        | Shortcut reference to `module.exports` | `exports.myFunc = () => {}`         |
| `require()`      | Imports exported values from a module  | `const myFunc = require('./file');` |

---

Would you like me to also include a short section showing the difference between `exports` and `module.exports` (common confusion)?
