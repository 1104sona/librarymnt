import React from "react";

const BookItem = ({ book, onDelete }) => {
  return (
    <div className="book-item">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
      <button onClick={() => onDelete(book._id)}>Delete</button>
    </div>
  );
};

export default BookItem;