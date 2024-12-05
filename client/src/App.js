import React from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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