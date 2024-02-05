const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if ((url === "/home")) {
    res.write("<html>");
    res.write("<head>");
    res.write("<title>New Message</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<p>Welcome home </p>")
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if ((url === "/about")) {
    res.write("<html>");
    res.write("<head>");
    res.write("<title>New Message</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<p>Welcome to About Us page</p>")
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if ((url === "/node")) {
    res.write("<html>");
    res.write("<head>");
    res.write("<title>New Message</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<p>Welcome to my Node Js project</p>")
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
 

  //   if(url==='/'){
  //     res.write("<html>");
  //     res.write("<head>");
  //     res.write("<title>New Message</title>");
  //     res.write("</head>");
  //     res.write("<body>");
  //     res.write('<form action="/message" method="POST">');
  //     res.write('<input type="text" name="message" />');
  //     res.write('<button type="submit">Send</button>');
  //     res.write("</form>");
  //     res.write("</body>");
  //     res.write("</html>");
  //     return res.end();
  //   }

  //     res.write("<html>");
  //     res.write("<head>");
  //     res.write("<title>home</title>");
  //     res.write("</head>");
  //     res.write("<body>");
  //     res.write("<p>Thank you to reaching us</p>")
  //     res.write("</body>");
  //     res.write("</html>");
  // res.write(`<p>hello ${url}</p>`)
});

server.listen(3000);

{
  /* <input type="text" /><button type="submit">send</button> */
}
