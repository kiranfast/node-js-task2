const Room = require('../mnodels/roomModel');

// Create a new room
exports.createRoom = async (req, res) => {
    try {
        const { number_of_seats, amenities, price_per_hour } = req.body;
        if (!number_of_seats || !price_per_hour) {
            return res.status(400).json({ error: "Invalid request data" });
        }
        const room = await Room.create({ number_of_seats, amenities, price_per_hour });
        res.status(201).json(room);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get room details by ID
exports.getRoomById = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (!room) {
            return res.status(404).json({ error: "Room not found" });
        }
        res.status(200).json(room);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update room details by ID
exports.updateRoomById = async (req, res) => {
    try {
        const { number_of_seats, amenities, price_per_hour } = req.body;
        const room = await Room.findByIdAndUpdate(req.params.id, { number_of_seats, amenities, price_per_hour }, { new: true });
        if (!room) {
            return res.status(404).json({ error: "Room not found" });
        }
        res.status(200).json(room);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a room by ID
exports.deleteRoomById = async (req, res) => {
    try {
        const room = await Room.findByIdAndDelete(req.params.id);
        if (!room) {
            return res.status(404).json({ error: "Room not found" });
        }
        res.status(204).json({});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
