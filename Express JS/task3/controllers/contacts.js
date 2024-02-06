const path = require("path")

exports.getContact = (req,res,next)=>{
    console.log("get");
    res.sendFile(path.join(__dirname,"../views/contact.html"))
}

exports.getContactSuccess = (req,res,next)=>{
    res.sendFile(path.join(__dirname,"../views/success.html"))
}

exports.postContactSuccess = (req,res,next)=>{
    console.log("contact post");
    res.redirect("/success")
}