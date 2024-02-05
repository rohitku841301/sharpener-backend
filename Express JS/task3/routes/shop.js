const express = require("express");
const router = express.Router();

router.get("/",(req,res,next)=>{
    res.send("I am back again")
})

module.exports=router;