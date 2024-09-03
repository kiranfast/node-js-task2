const Booking = require('../models/bookingModel');
const Room = require('../models/roomModel');

// Create a new booking
exports.createBooking = async (req, res) => {
    try {
        const { customer_name, date, start_time, end_time, room_id } = req.body;

        if (!customer_name || !date || !start_time || !end_time || !room_id) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const room = await Room.findById(room_id);
        if (!room) {
            return res.status(404).json({ error: "Room not found" });
        }

        // Check for time conflicts
        const existingBookings = await Booking.find({
            room_id,
            date,
            $or: [
                { start_time: { $lt: end_time }, end_time: { $gt: start_time } }
            ]
        });
        if (existingBookings.length > 0) {
            return res.status(409).json({ error: "Time slot already booked" });
        }

        const booking = await Booking.create({ customer_name, date, start_time, end_time, room_id });
        res.status(201).json(booking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get booking details by ID
exports.getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ error: "Booking not found" });
        }
        res.status(200).json(booking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all bookings for a room by room ID
exports.getBookingsByRoomId = async (req, res) => {
    try {
        const bookings = await Booking.find({ room_id: req.params.roomId });
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
