import express from "express";

const app = express();
const port = 8080;

app.get("/api", (req, res) => {
  res.send("Product listed !");
});

app.listen(port, function () {
  console.log(`Server running on http://localhost:${port}`);
});
