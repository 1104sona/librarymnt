import React, { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../service/BookService";
import BookItem from "./BookItem";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const books = await getBooks();
        setBooks(books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      setBooks(books.filter(book => book._id !== id)); // Filter out the deleted book
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div>
      <h2>Library Management</h2>
      <div>
        {books.length > 0 ? (
          books.map(book => (
            <BookItem key={book._id} book={book} onDelete={handleDelete} />
          ))
        ) : (
          <p>No books available.</p>
        )}
      </div>
    </div>
  );
};

export default BookList;