const url = require("url");
const fs = require("fs");
const path = require("path");
// const cats = require("../data/cats.json");
// const breeds = require("../data/breeds.json");

module.exports = (req, res) => {
  const pathname = url.parse(req.url).pathname;

  if (pathname === "/" && req.method === "Get") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    fs.writeFile("views\home\index.html", (err, data) => {
      if (err) {
        console.log("some err");
        return;
      }
      res.write(data)
    });
  } else {
    return true;
  }
};
