const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Create a new book
router.post('/books', bookController.createBook);

// Get all books
router.get('/books', bookController.getAllBooks);

// Get a specific book by its ID
router.get('/books/:id', bookController.getBookById);

// Update a book by its ID
router.put('/books/:id', bookController.updateBook);

// Delete a book by its ID
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;
