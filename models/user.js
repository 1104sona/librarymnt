const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String },
    publisher: { type: String },
    published_year: { type: Number },
    isbn: { type: String, unique: true, required: true },
    status: { type: String, default: 'available' },  // available, borrowed
    location: { type: String }
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
