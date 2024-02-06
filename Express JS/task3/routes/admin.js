const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/addProduct", productController.getAddProduct);

router.post("/addProduct", productController.postAddProduct);

module.exports = router;
