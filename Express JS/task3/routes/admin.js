const express = require("express");
const path = require('path')
const router = express.Router();

router.get("/addProduct",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../views/admin.html"))
})

router.post("/addProduct",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/shop");
})

module.exports = router;