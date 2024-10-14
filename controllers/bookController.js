const Book = require('../models/book'); // Assuming you have a Book model

// Create a new book
exports.createBook = async (req, res) => {
    try {
        const { title, author, isbn, publishedYear, copiesAvailable, genre } = req.body;

        const newBook = new Book({
            title,
            author,
            isbn,
            publishedYear,
            copiesAvailable,
            genre
        });

        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (err) {
        res.status(500).json({ error: 'Unable to create book', message: err.message });
    }
};

// Get all books
exports.getAllBooks = async (req, res) => {
    try {
        const { title, author, isbn, publishedYear, copiesAvailable, genre } = req.body;

        const newBook = new Book({
            title,
            author,
            isbn,
            publishedYear,
            copiesAvailable,
            genre
        });
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: 'Unable to fetch books', message: err.message });
    }
};

// Get a single book by ID
exports.getBookById = async (req, res) => {
    try {
        const { title, author, isbn, publishedYear, copiesAvailable, genre } = req.body;

        const newBook = new Book({
            title,
            author,
            isbn,
            publishedYear,
            copiesAvailable,
            genre
        });
        
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });

        res.status(200).json(book);
    } catch (err) {
        res.status(500).json({ error: 'Unable to fetch book', message: err.message });
    }
};

// Update a book by ID
exports.updateBook = async (req, res) => {
    try {
        const { title, author, isbn, publishedYear, copiesAvailable } = req.body;

        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            { title, author, isbn, publishedYear, copiesAvailable },
            { new: true } // To return the updated document
        );

        if (!updatedBook) return res.status(404).json({ message: 'Book not found' });

        res.status(200).json(updatedBook);
    } catch (err) {
        res.status(500).json({ error: 'Unable to update book', message: err.message });
    }
};

// Delete a book by ID
exports.deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) return res.status(404).json({ message: 'Book not found' });

        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Unable to delete book', message: err.message });
    }
};
