const fs = require("fs");

let handler = async(req, res) => {
  const url = req.url;
  const method = req.method;

  console.log(url);

  if (url === "/" && method === "POST") {
    const body = [];
    req.on("data", (chunks) => {
      body.push(chunks);
      console.log(chunks);
    });

    req.on("end", async() => {
      const parsedBody = Buffer.concat(body).toString();
      const newMessage = parsedBody.split("=")[1];
      try {
        await fs.promises.writeFile("text.txt",newMessage)
        console.log(newMessage);
      } catch (err) {
        console.error(err);
      }
    });
  }

  if (url === "/") {
    try {
      const result = await fs.promises.readFile("text.txt",'utf-8')
      console.log(result);
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
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = {
  handler,
};
