const express = require("express");
const contactController = require("../controllers/contacts");
const router = express.Router();

router.get("/success", contactController.getContactSuccess);
router.post("/success", contactController.postContactSuccess);

module.exports = router;
