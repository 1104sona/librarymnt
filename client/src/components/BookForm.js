import React, { useState } from 'react';

const BookForm = ({ onAddBook }) => {
  // State to hold the form input values
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');

  // Handler for submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new book object
    const newBook = {
      title,
      author,
      genre,
      year
    };

    // Pass the new book to the AddBook component
    onAddBook(newBook);

    // Clear the form inputs after submission
    setTitle('');
    setAuthor('');
    setGenre('');
    setYear('');
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <div>
        <label htmlFor="title">Book Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="genre">Genre</label>
        <input
          type="text"
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="year">Year of Publication</label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </div>

      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;