const path = require('path')

const Product = require("../models/product")

exports.getAddProduct = (req,res,next)=>{
    res.sendFile(path.join(__dirname,"../views/admin.html"))
}

exports.postAddProduct = (req,res,next)=>{
    const product = new Product(req.body)
    product.save();
    // console.log(req.body);
    res.redirect("/shop");
}

exports.getShopProduct = (req,res,next)=>{
    const product = Product.fetchAll();
    // console.log(JSON.stringify(product));
    res.sendFile(path.join(__dirname,"../views/shop.html"))
}