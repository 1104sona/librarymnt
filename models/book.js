const mongoose = require('mongoose');

// Define the schema for a book
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    isbn: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    publishedYear: {
        type: Number,
        required: true
    },
    copiesAvailable: {
        type: Number,
        required: true,
        min: 0
    },
    genre: {
        type: String,
        enum: ['Fiction', 'Non-fiction', 'Science', 'History', 'Fantasy', 'Biography', 'Mystery', 'Others'],
        default: 'Others'
    },
    description: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the Book model from the schema
const Book = mongoose.model('book', bookSchema);

module.exports = Book;
