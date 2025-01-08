import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, TextField, Typography, Button, Grid, Paper } from '@mui/material';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const UpdateBookInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: '',
    isbn: '',
    author: '',
    description: '',
    published_date: '',
    publisher: '',
  });
  // const myURL = process.env.REACT_APP_URL;

  useEffect(() => {
    axios
      .get(`https://library-management-h6hw.onrender.com/api/books/${id}`)
      .then((res) => {
        setBook({
          title: res.data.title,
          isbn: res.data.isbn,
          author: res.data.author,
          description: res.data.description,
          published_date: res.data.published_date,
          publisher: res.data.publisher,
        });
      })
      .catch((err) => {
        toast.error('Failed to fetch book details. Please try again.', {
          position: 'top-right',
          autoClose: 3000,
          theme: 'dark',
          transition: Slide,
        });
      });
  }, [id]);

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  const URL = process.env.REACT_APP_URL;

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`https://library-management-h6hw.onrender.com/api/books/${id}`, book)
      .then((res) => {
        toast.success('Book updated successfully!', {
          position: 'top-right',
          autoClose: 3000,
          theme: 'dark',
          transition: Slide,
        });
        setTimeout(() => navigate(`/show-book/${id}`), 3000);
      })
      .catch((err) => {
        toast.error('Failed to update the book. Please try again.', {
          position: 'top-right',
          autoClose: 3000,
          theme: 'dark',
          transition: Slide,
        });
      });
  };

  return (
    <Container
    maxWidth="lg"
    sx={{
      textAlign: 'center',
      py: 5,
      backgroundColor: 'background.paper', // Warm Sand color
      borderRadius: '10px',
      boxShadow: '0px 6px 12px rgba(105, 67, 43, 0.3)', // Warm shadow
    }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 5,
          borderRadius: '16px',
          backgroundColor: '#1e1e1e',
          color: '#e0e0e0',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            mb: 2,
            fontWeight: 'bold',
            color: '#f5f5f5',
            fontFamily: `'Roboto Slab', serif`,
          }}
        >
          Update Book Info
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            mb: 3,
            color: '#bdbdbd',
          }}
        >
          Modify the details below to update the book.
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
                      backgroundColor: '#2c2c2c',
                      color: '#e0e0e0',
                    },
                    '& .MuiInputLabel-root': {
                      color: '#9e9e9e',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#616161',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#757575',
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
                  background: 'linear-gradient(90deg, #424242, #616161)',
                  color: '#fff',
                  fontWeight: 'bold',
                  py: 1.5,
                  borderRadius: '8px',
                  textTransform: 'none',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #616161, #757575)',
                  },
                }}
              >
                Update Book
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

export default UpdateBookInfo;
