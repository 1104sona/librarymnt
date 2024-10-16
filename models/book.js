const mongoose = require('mongoose');

// Define the schema for a Book
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
    },
    year: {
        type: Number,
    },
    available: {
        type: Boolean,
        default: true
    }
});

// Create a Book model
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
