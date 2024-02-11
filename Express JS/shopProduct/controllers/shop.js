const Product = require('../models/product');
const Cart = require('../models/cart');
const { where } = require('sequelize');

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then((product)=>{
    console.log(product.id);
    res.render('shop/product-list', {
      prods: product,
      pageTitle: 'All Products',
      path: '/products'
    });
  })
  .catch((error)=>{
    console.log(error);
  })
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;

  Product.findByPk(prodId)
  .then((result)=>{
    if (!result) {
      // Handle the case when the product is not found
      console.log('Product not found.');
      return res.redirect('/'); 
    }
    console.log(result.title);
    res.render('shop/product-detail', {
          product: result,
          pageTitle: result.dataValues.title,
          path: '/products'
        });
        console.log("hvb");
  })
  .catch((error)=>{
    console.log("kjn");
    console.log(error);
  })

  // Product.findById(prodId)
  // .then(([product,productDetail])=>{
  //   console.log(product);
  //   res.render('shop/product-detail', {
  //     product: product[0],
  //     pageTitle: product.title,
  //     path: '/products'
  //   });
  // })
  // .catch((error)=>{
  //   console.log(error);
  // })
};

exports.getIndex = (req, res, next) => {
  Product.findAll()
  .then((product)=>{
    console.log(product.id);
    res.render('shop/index', {
      prods: product,
      pageTitle: 'Shop',
      path: '/'
    });
  })
  .catch((error)=>{
    console.log(error);
  })
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
