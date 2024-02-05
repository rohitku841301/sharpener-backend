const express = require("express");

const router = express.Router();

router.get("/addProduct",(req,res,next)=>{
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"/><input type="number" name="size"/><button type="submit">send</button></form>')
})

router.post("/addProduct",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/shop");
})

module.exports = router;