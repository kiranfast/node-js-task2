const express = require('express');
const mongoose = require('mongoose');
const roomRoutes = require('./routes/rooms');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/hallbooking', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database connected'))
.catch(err => console.error('Database connection error:', err));

app.use('/api/rooms', roomRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
