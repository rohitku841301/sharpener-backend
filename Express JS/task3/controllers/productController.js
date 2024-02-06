const path = require('path')

exports.getAddProduct = (req,res,next)=>{
    res.sendFile(path.join(__dirname,"../views/admin.html"))
}

exports.postAddProduct = (req,res,next)=>{
    console.log(req.body);
    res.redirect("/shop");
}

exports.getShopProduct = (req,res,next)=>{
    res.sendFile(path.join(__dirname,"../views/shop.html"))
}