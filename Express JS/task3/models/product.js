const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname,"../data/productDetail.json");

const product = [];

module.exports = class Product{
    constructor(item){
        this.item = item;
    }

    save(){
        fs.appendFile(filePath,JSON.stringify(this.item),(err)=>{
            console.log(err);
        })
        product.push(this.item)
    }

    static fetchAll(){
        fs.readFile(filePath,"utf-8",(err,result)=>{
            console.log((result));
        })
        return product;
    }
}