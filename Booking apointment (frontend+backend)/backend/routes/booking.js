const express = require('express');
const bookingController = require('../controller/booking')
const router = express.Router();

router.post('/booking', bookingController.postBooking);
router.get('/booking', bookingController.getBooking);

router.put('/booking/:userId', bookingController.editBooking);

router.delete('/booking/:userId', bookingController.deleteBooking);

module.exports = router;