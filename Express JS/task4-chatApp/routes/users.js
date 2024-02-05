const express = require("express");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "chat.txt");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send(
    '<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/login" method="POST"><input id="username" type="text" name="name" /><button type="submit">add</button></form>'
  );
});

router.post("/login", (req, res) => {
  const username = req.body.name;
  console.log(username);
  res.redirect("/");
});

router.get("/", (req, res) => {
  fs.readFile(filePath, "utf8", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(
        `<p>${result}</p>
        <form action="/" method="POST" onsubmit="document.getElementById('user').value=localStorage.getItem('username')">
        <input type="text" name="message" />
        <input type="hidden" name="username" id="user">
        <button type="submit">send</button>
        </form>`
      );
    }
  });
});

router.post("/", (req, res) => {
    console.log(req.body);
  const username = req.body.username;
  const message = req.body.message;
  const usernameMessage = `${username}:${message} `;
  fs.appendFile(filePath, usernameMessage, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
});

module.exports = router;
