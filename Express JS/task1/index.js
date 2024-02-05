const express = require("express");
const app = express();

app.use((req,res,next)=>{
    console.log("middlewear 1");
    res.send(" { key1: value }")
    next();
})

app.use((req,res,next)=>{
    console.log("middlewear 2");
})


app.listen(3000,()=>{
    console.log("server has started at port 3000");
})