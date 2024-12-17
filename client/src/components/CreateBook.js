import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  TextField, 
  Typography,                 
  Button, 
  Snackbar, 
  Alert 
} from '@mui/material';
import axios from 'axios';

const CreateBook = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    name: '',
    maxcount: '',
    phonenumber: '',
    rentperday: '',
    type: '',
    description: '',
    location: '',
    features: '',
  });

  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: '',
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Book data before submit:', book); // Debugging line

    // Ensure correct data types
    const parsedBook = {
      ...book,
      maxcount: Number(book.maxcount),        // Parse maxcount to number
      rentperday: Number(book.rentperday),    // Parse rentperday to number
      features: book.features.split(',').map(item => item.trim()),  // Convert features to array
    };

    try {
      const response = await axios.post('http://localhost:5000/books', parsedBook);
      console.log('Response from server:', response.data); // Debugging response

      setNotification({
        open: true,
        message: 'Book created successfully!',
        severity: 'success',
      });

      // Reset the form
      setBook({
        name: '',
        maxcount: '',
        phonenumber: '',
        rentperday: '',
        type: '',
        description: '',
        location: '',
        features: '',
      });

      setTimeout(() => navigate('/'), 1500);
    } catch (error) {
      console.error('Error creating book:', error);
      const errorMessage = error.response?.data?.message || 'Failed to create book. Please try again.';

      setNotification({
        open: true,
        message: errorMessage,
        severity: 'error',
      });
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: 'auto',
        padding: 4,
        borderRadius: 2,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#1c1c1c', // Dark background for the form
      }}
    >
      <Typography 
        variant="h4" 
        component="h1" 
        textAlign="center" 
        mb={3}
        color="primary"
        fontWeight={700}
      >
        Create a New book
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Book Name"
          name="name"
          variant="outlined"
          value={book.name}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
          Patterns={{
            style: { color: '#93a1a1' }, // Lighter label color for readability
          }}
          Pattern={{
            style: { color: '#fdf6e3' }, // Light text color
          }}
        />
        <TextField
          fullWidth
          label="ISBN"
          name="isbn"
          variant="outlined"
          value={book.isbn}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
          Pattern={{
            style: { color: '#93a1a1' },
          }}
          Patterns ={{
            style: { color: '#fdf6e3' },
          }}
        />
        <TextField
          fullWidth
          label="Author"
          name="author"
          variant="outlined"
          value={book.author}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
          Patterns={{
            style: { color: '#93a1a1' },
          }}
          Pattern={{
            style: { color: '#fdf6e3' },
          }}
        />
        <TextField
          fullWidth
          label="Describe This Book"
          name="describethebook"
          variant="outlined"
          value={book.describethebook}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
          Patterns={{
            style: { color: '#93a1a1' },
          }}
          Pattern={{
            style: { color: '#fdf6e3' },
          }}
        />
        <TextField
          fullWidth
          label="mm/dd/yy"
          name="mm/dd/yy"
          variant="outlined"
          value={book.date}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
          Patterns={{
            style: { color: '#93a1a1' },
          }}
          Pattern={{
            style: { color: '#fdf6e3' },
          }}
        />
        <TextField
          fullWidth
          label="Publisher"
          name="publisher"
          variant="outlined"
          value={book.publisher}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
          Patterns={{
            style: { color: '#93a1a1' },
          }}
          Pattern={{
            style: { color: '#fdf6e3' },
          }}
        />
        
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 3,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              width: '48%',
              fontWeight: 'bold',
              borderRadius: '12px', // Rounded button
            }}
          >
            Create Book
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleCancel}
            sx={{
              width: '48%',
              fontWeight: 'bold',
              borderRadius: '12px',
            }}
          >
            Cancel
          </Button>
        </Box>
      </form>

      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={notification.severity}
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CreateBook;