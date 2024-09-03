const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

// Route to create a room
router.post('/', roomController.createRoom);

// Route to get details of a room by ID
router.get('/:id', roomController.getRoomById);

// Route to update room details by ID
router.put('/:id', roomController.updateRoomById);

// Route to delete a room by ID
router.delete('/:id', roomController.deleteRoomById);

module.exports = router;
