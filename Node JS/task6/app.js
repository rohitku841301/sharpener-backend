const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/favicon.ico") {
    res.writeHead(200, { "Content-Type": "image/x-icon" });
    res.end("hii");
  } else if (url === "/" && method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      console.log(chunk);
      body += chunk;
    });
    req.on("end", () => {
      const parsedBody = body.split("=")[1];
      console.log(parsedBody);
      fs.writeFile("text.txt", parsedBody, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("write success");
          res.writeHead(302, { Location: "/" });
          res.end();
        }
      });
    });
  } else if (url === "/") {
    fs.readFile("text.txt", "utf8", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.write("<html>");
        res.write("<head>");
        res.write("<title>FormData</title>");
        res.write("</head>");
        res.write("<body>");
        res.write(`<p>${result}</p>`);
        res.write(
          '<form action="/" method="POST"><input type="text" name="message" /><button>send</button></form>'
        );
        res.write("</body>");
        res.write("</html>");
        res.end();
      }
    });
  } else {
    res.end("404");
  }
});

server.listen(4000);
