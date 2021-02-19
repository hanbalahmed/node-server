const http = require("http");
const fs = require("fs");
// variables
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  // let path = "./"; // or ../ if a seperate folder
  // switch (req.url) {
  //   default:
  //     path += "./error/error.html";
  //     res.statusCode = 404;
  //     break;
  // }

  fs.readFile("./src/index.html", (err, data) => {
    if (err) {
      alert("ERROR");
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(PORT, () =>
  console.log(`Server started on http://localhost:3000`)
);
