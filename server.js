const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const book = require('../../models/book');


const app = express();

// Middleware
app.use(bodyParser.json()); // For parsing application/json
app.use(cors()); // Enable CORS

// MongoDB connection
mongoose.connect('mongodb://localhost:3000/library', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Could not connect to MongoDB...', err);
});

// Routes
app.use('/api', bookRoutes); // Prefix all routes with /api

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
