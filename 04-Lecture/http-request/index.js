const http = require("http");

const port = 8880;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello, I'm comming from server");
});

server.listen(port, () => {
  console.log(`Server running at port : ${port}`);
});
