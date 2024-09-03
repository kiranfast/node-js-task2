const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    customer_name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    start_time: {
        type: Date,
        required: true
    },
    end_time: {
        type: Date,
        required: true
    },
    room_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
