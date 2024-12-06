import React from 'react';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      <h2>Book List</h2>
      
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <strong>{book.title}</strong> by {book.author} ({book.year}) - Genre: {book.genre}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;