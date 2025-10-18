const Emitter = require("./emitter");
const events = require("./config");

const emitter = new Emitter();

emitter.on(events.GREET, function () {
  console.log("Hello!!");
});

emitter.on(events.GREET, function () {
  console.log("Greet!");
});

emitter.on(events.DEV, function () {
  console.log("Syphar dev");
});

emitter.on(events.FILEOPEN, function () {
  console.log("An empty file open");
});

emitter.on(events.FILESAVED, function () {
  console.log("Content saved on file");
});

const values = Object.values(events);

values.map((v) => emitter.emit(v));
