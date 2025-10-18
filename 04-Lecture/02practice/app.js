const http = require("http");

const port = 8880;

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/submit") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      console.log(JSON.parse(body));
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          success: true,
          message: "Account created!",
          body: JSON.parse(body),
        })
      );
    });
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        success: false,
        message: "Account doesn't created!",
      })
    );
  }
});

server.listen(port, () => {
  console.log(`Server running at : http://localhost:${port}`);
});
