const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req);
  const url = req.url;
  const method = req.method;
 
  if (url === "/" && method === "POST") {
    const body = [];
    req.on("data", (chunks) => {
      body.push(chunks);
      console.log(chunks);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const newMessage = parsedBody.split("=")[1];
      fs.writeFile("text.txt", newMessage, (err) => {
        if (err) {
          console.log(err);
        }
      });
      console.log(newMessage);
    });
  }

  if (url === "/") {
    fs.readFile("text.txt", "utf-8", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.write("<html>");
        res.write("<head>");
        res.write("<title>New Message</title>");
        res.write("</head>");
        res.write("<body>");
        res.write(`<p>${result}</p>`);
        res.write('<form action="/" method="POST">');
        res.write('<input type="text" name="message" />');
        res.write('<button type="submit">Send</button>');
        res.write("</form>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
      }
    });
  }
});

server.listen(4000);
