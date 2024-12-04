import React, { useState } from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

const App = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <div className="App">
      <h1>Library Management System</h1>
      <AddBook onAdd={handleAddBook} />
      <BookList />
    </div>
  );
};

export default App;