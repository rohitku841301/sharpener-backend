const express = require("express");
const contactController = require("../controllers/contacts")
const router = express.Router();

router.get("/contact",contactController.getContact)

module.exports=router;