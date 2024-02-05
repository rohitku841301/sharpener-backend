const express = require("express");
const path = require("path")
const router = express.Router();

router.get("/contact",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../views/contact.html"))
})

router.post("/contact",(req,res,next)=>{
    console.log("success");
    res.redirect("/success") 
})

module.exports=router;