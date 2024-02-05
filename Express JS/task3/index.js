const express = require("express");
const bodyParser = require("body-parser");

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop")

const app = express();

app.use(bodyParser.urlencoded({extended:false}))

app.use("/admin",adminRouter);
app.use("/shop", shopRouter);


app.use((req,res,next)=>{
    res.status(404).send("<h1>Page Not</h1>")
    next();
})





app.listen(3000,()=>{
    console.log("server has started at port 3000");
})