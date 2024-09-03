const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Route to list all customers with their bookings
router.get('/with-bookings', customerController.listCustomersWithBookings);

module.exports = router;
