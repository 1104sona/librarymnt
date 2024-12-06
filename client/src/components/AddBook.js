import React, { useState } from 'react';
import BookForm from './BookForm';
import BookList from './BookList';

const AddBook = () => {
  // State to hold the list of books
  const [books, setBooks] = useState([]);

  // Function to add a new book to the list
  const addBookHandler = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <div className="add-book-container">
      <h1>Add a New Book</h1>
      
      {/* BookForm component for adding a new book */}
      <BookForm onAddBook={addBookHandler} />

      {/* BookList component to display the list of added books */}
      <BookList books={books} />
    </div>
  );
};

export default AddBook;