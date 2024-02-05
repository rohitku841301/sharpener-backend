const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/users");

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(userRouter);

app.listen(3000,()=>{
    console.log("server has started at port 3000");
})

