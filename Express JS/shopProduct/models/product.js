const db = require("../util/db");
const path = require('path');



module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id=Math.random();
    return db.execute(
      'INSERT INTO product(title,imageUrl,Price,description) VALUES (?, ?, ?, ?)',
      [this.title, this.imageUrl, this.price, this.description]
    );
  }

  static fetchAll() {
    return db.execute('SELECT * FROM product');
  }

  static findById(id) {
    return db.execute('SELECT * FROM product WHERE id=?',[id])
  }

  static findByIdAndDelete(id){
   return db.execute('DELETE FROM product WHERE id=?',[id]);
  }

};
