const express = require('express');
const mongoose = require('mongoose');
const books = require('./routes/books');

const app = express();
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Default root route
app.get('/', (req, res) => {
    res.send('Welcome to the Library Management System!');
});

// Use the book routes
app.use('/api', books);

// Connect to MongoDB and start the server
mongoose.connect('mongodb://127.0.0.1:27017/library')
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error);
    });
