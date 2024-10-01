const express = require('express');        // Import Express
const mongoose = require('mongoose');      // Import Mongoose
const userRoutes = require('./routes/userRoutes');  // Import book routes

// Initialize the Express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use the book routes with a base URL of '/api'
app.use('/api', userRoutes);

connectDB();


// Setup a default route for checking server status
app.get('/', (req, res) => {
    res.send('Library Management System API is running');
});

// Define the port where the server will listen
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
