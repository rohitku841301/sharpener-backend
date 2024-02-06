const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop")
const contactRouter = require("./routes/contact")
const successRouter = require("./routes/success")
const errorController = require("./controllers/error")

const app = express();

app.use(express.static(path.join(__dirname,"public")))

app.use(bodyParser.urlencoded({extended:false}))

app.use("/admin",adminRouter);
app.use("/shop", shopRouter);
app.use(successRouter);
app.use(contactRouter);




app.use(errorController.pageNotFound)





app.listen(3000,()=>{
    console.log("server has started at port 3000");
})