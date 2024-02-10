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
  const product = new Product(title, imageUrl, description, price);
  product.save()
  .then(()=>{
    res.redirect('/');
  })
  .catch((error)=>{
    console.log(error);
  })
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
  .then(([products,productsDetail])=>{
    res.render('admin/products', {
      prods: products,
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
  Product.findById(productId)
  .then(([product,productDetail])=>{
      if(!product){
        res.redirect("/")
      }
      console.log(product[0]);
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing:editMode,
        product:product[0]
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
  Product.findByIdAndDelete(productId)
  .then(()=>{
    res.redirect("/")
  })
  .catch((error)=>{
    console.log(error);
  })
}