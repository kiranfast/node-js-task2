const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Route to create a booking
router.post('/', bookingController.createBooking);

// Route to get booking details by ID
router.get('/:id', bookingController.getBookingById);

// Route to get all bookings for a specific room by room ID
router.get('/room/:roomId', bookingController.getBookingsByRoomId);

module.exports = router;
