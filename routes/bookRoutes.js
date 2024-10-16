const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Route to add a new book
router.post('/books', bookController.addBook);

// Route to get all books
router.get('/books', bookController.getBooks);

// Route to get a book by ID
router.get('/books/:id', bookController.getBookById);

// Route to update a book by ID
router.put('/books/:id', bookController.updateBook);

// Route to delete a book by ID
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;
