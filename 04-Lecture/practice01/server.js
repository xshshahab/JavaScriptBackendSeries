const http = require("http");

const port = 8880;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Home route server response!");
  }
  if (req.url === "/api/user") {
    const user = {
      username: "dev.sudhir",
      email: "dev.sudhir9may@gmail.com",
      fullName: "Sudhir Kumar Ranjan",
      age: 21,
    };

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(user));
  }
});

server.listen(port, () => {
  console.log(`Server running at port : ${port}`);
});
