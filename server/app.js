const app = require("express")();
const http = require("http").createServer(app);
const data = require("./data");

const port = process.env.port || 8000;

app.get("/", (req, res) => {
  res.json({ data: data });
});


http.listen(port, function () {
  console.log("Server running");
  // change this in production
  http.close(function () {
    console.log("Server started on 127.0.0.1:8000");
    http.listen(8000, "127.0.0.1");
  });
});
