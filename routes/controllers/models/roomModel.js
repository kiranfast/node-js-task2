const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    number_of_seats: {
        type: Number,
        required: true,
        min: 1
    },
    amenities: {
        type: [String],
        default: []
    },
    price_per_hour: {
        type: Number,
        required: true,
        min: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Room', roomSchema);
