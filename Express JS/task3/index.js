const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop")
const contactRouter = require("./routes/contact")
const successRouter = require("./routes/success")

const app = express();

app.use(express.static(path.join(__dirname,"public")))

app.use(bodyParser.urlencoded({extended:false}))

app.use("/admin",adminRouter);
app.use("/shop", shopRouter);
app.use(successRouter);
app.use(contactRouter);


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views/404.html"))
})





app.listen(3000,()=>{
    console.log("server has started at port 3000");
})