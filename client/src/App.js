import React from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

const App = () => {
    return (
        <div>
            <h1>Library Management System</h1>
            <BookForm />
            <BookList />
        </div>
    );
};

export default App;