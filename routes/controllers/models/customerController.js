const Booking = require('../models/bookingModel');
const Room = require('../models/roomModel');

// List all customers with booking data
exports.listCustomersWithBookings = async (req, res) => {
    try {
        // Fetch all bookings and populate room details
        const bookings = await Booking.find().populate('room_id'); // Room details are included

        // Map bookings to include relevant customer and room information
        const result = bookings.map(booking => ({
            customer_name: booking.customer_name,
            room_name: booking.room_id.name, // Access the room's name from the populated room_id
            date: booking.date,
            start_time: booking.start_time,
            end_time: booking.end_time
        }));

        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
