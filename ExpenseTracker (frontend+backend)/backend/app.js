const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const database = require("./database/db");

const expenseRoute = require("./routes/expense");

const app = express();

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

app.use(bodyParser.json());

app.use(expenseRoute);

database
  .sync()
  .then((result) => {
    app.listen(3000, () => {
      console.log("server has started on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
