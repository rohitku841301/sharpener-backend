const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  req.user.createProduct({
    title: title,
    imageUrl: imageUrl,
    price: price,
    description: description,
    userUserId:req.user.userId
  })
  .then((result)=>{
    res.redirect("/")
  })
  .catch((error)=>{
    console.log(error);
  })
  
};

exports.getProducts = (req, res, next) => {

  Product.findAll()
  .then((product)=>{
    console.log(product.id);
    res.render('admin/products', {
      prods: product,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch((error)=>{
    console.log(error);
  })
};

exports.getEditProduct = (req,res,next)=>{
  const editMode = req.query.edit;
  if(!editMode){
    return res.redirect('/');
  }
  const productId = req.params.productId;
  Product.findByPk(productId)
  .then((result)=>{
    console.log(result);
    if(!result){
      res.redirect("/")
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing:editMode,
      product:result
  })
  })
  .catch((error)=>{
    console.log(error);
  })
}

exports.getDeleteProduct = (req,res,next)=>{
  const deleteMode = req.query.delete;
  if(!deleteMode){
    return res.redirect('/');
  }
  const productId = req.params.productId;
  console.log(productId);
  Product.destroy({
    where: {
      id: productId
    }
  })
  .then((result)=>{
    console.log(result);
    console.log("deleted");
    res.redirect("/")
  })
  .catch((error)=>{
    console.log(error);
  })
 
}