import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = () => {
    const [books, setBooks] = useState([]);

    // Fetch books from the backend API
    useEffect(() => {
        axios.get('http://localhost:3000/api/books')
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the books!', error);
            });
    }, []);

    // Handle book deletion
    const deleteBook = (id) => {
        axios.delete(`http://localhost:3000/api/books/${id}`)
            .then(() => {
                setBooks(books.filter(book => book._id !== id));
            })
            .catch((error) => {
                console.error('There was an error deleting the book!', error);
            });
    };

    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {books.map((book) => (
                    <li key={book._id}>
                        <strong>{book.title}</strong> by {book.author} ({book.genre}, {book.year})
                        <button onClick={() => deleteBook(book._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;