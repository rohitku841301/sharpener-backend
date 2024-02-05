const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:false}))

app.use("/addProduct",(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"/><input type="number" name="size"/><button type="submit">send</button></form>')
})

app.post("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
})

app.use("/",(req,res,next)=>{
    res.send("I am back again")
})


app.listen(3000,()=>{
    console.log("server has started at port 3000");
})