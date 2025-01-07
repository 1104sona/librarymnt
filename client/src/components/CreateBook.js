import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Typography, Button, Box, Grid, Paper } from '@mui/material';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const CreateBook = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: '',
    isbn: '',
    author: '',
    description: '',
    published_date: '',
    publisher: '',
  });

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://library-management-h6hw.onrender.com/api/books', book)
      .then((res) => {
        setBook({
          title: '',
          isbn: '',
          author: '',
          description: '',
          published_date: '',
          publisher: '',
        });

        toast.success('Book added successfully!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Slide,
        });

        setTimeout(() => navigate('/'), 3000);
      })
      .catch((err) => {
        toast.error('Failed to add the book. Please try again.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          transition: Slide,
        });
      });
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        py: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#121212', // Dark background
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 5,
          borderRadius: '16px',
          backgroundColor: '#1e1e1e', // Slightly lighter gray for contrast
          color: '#e0e0e0', // Light gray text
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            mb: 2,
            fontWeight: 'bold',
            color: '#f5f5f5', // Soft white for headings
            fontFamily: `'Roboto Slab', serif`,
          }}
        >
          Add a New Book
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            mb: 3,
            color: '#bdbdbd', // Subtle gray for subtitles
          }}
        >
          Fill in the details below to add a book to the library.
        </Typography>
        <form onSubmit={onSubmit}>
          <Grid container spacing={3}>
            {[
              { name: 'title', label: 'Title of the Book', type: 'text' },
              { name: 'isbn', label: 'ISBN', type: 'text' },
              { name: 'author', label: 'Author', type: 'text' },
              { name: 'description', label: 'Description', type: 'text' },
              { name: 'published_date', label: 'Published Date', type: 'date' },
              { name: 'publisher', label: 'Publisher', type: 'text' },
            ].map((field) => (
              <Grid item xs={12} sm={6} key={field.name}>
                <TextField
                  fullWidth
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  value={book[field.name]}
                  onChange={onChange}
                  variant="outlined"
                  InputLabelProps={field.type === 'date' ? { shrink: true } : {}}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      backgroundColor: '#2c2c2c', // Dark input field
                      color: '#e0e0e0',
                    },
                    '& .MuiInputLabel-root': {
                      color: '#9e9e9e', // Muted label color
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#616161', // Muted border
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#757575', // Slightly lighter on hover
                    },
                  }}
                />
              </Grid>
            ))}

            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                sx={{
                  background: 'linear-gradient(90deg, #424242, #616161)', // Gray gradient
                  color: '#fff',
                  fontWeight: 'bold',
                  py: 1.5,
                  borderRadius: '8px',
                  textTransform: 'none',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #616161, #757575)', // Lighter gray hover
                  },
                }}
              >
                Add Book
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </Container>
  );
};

export default CreateBook;
