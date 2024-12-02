import React, { useState, useEffect } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import { getBooks } from "./services/bookService";

function App() {
  const [books, setBooks] = useState([]);

  // Fetch books from the backend on component mount
  useEffect(() => {
    async function fetchBooks() {
      const booksData = await getBooks();
      setBooks(booksData);
    }
    fetchBooks();
  }, []);

  // Add a book to the list
  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  // Delete a book from the list
  const deleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
  };

  return (
    <div className="App">
      <h1>Library Management System</h1>
      <BookForm addBook={addBook} />
      <BookList books={books} deleteBook={deleteBook} />
    </div>
  );
}

export default App;