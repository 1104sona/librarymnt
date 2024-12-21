import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Grid } from '@mui/material';


const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
      <Typography variant="h2" component="h1" color="primary" gutterBottom>
        Welcome to the Book Management System
      </Typography>
      <Typography variant="h5" gutterBottom>
        Manage your books efficiently and effectively.
      </Typography>
      <Box mt={5}>
      <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <Button 
          component={Link} 
          to="/book-list" // Updated to link to the ShowBookList component
          color="primary" 
          size="large"
          fullWidth
          variant="contained"
          sx={{ py: 1}}>
          View Books
        </Button>
        </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
        <Button
        component={Link} 
        to="/book-export" // Updated to link to the ShowBookList component
        color="primary" 
        size="large"
        fullWidth
        variant="contained"
        sx={{ py: 1 }}>
        Download Book-list
        </Button>
        </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
        <Button
        component={Link} 
        to="/github-icon" // Updated to link to the ShowBookList component
        color="primary" 
         size="large"
         fullWidth
        variant="contained"
        sx={{ py: 1}}>
        GitHub
        </Button>
        </Grid>
        </Grid>
      
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
        <Button
        component= 'a' 
        href='https://docs.google.com/document/d/1yeICuOXo53lWL12QzrbZeTWO90BPCPmLdb3HVUaDbec/edit?tab=t.0'
        to="/resume" // Updated to link to the ShowBookList component
        color="primary" 
         size="large"
         fullWidth
        variant="contained"
        sx={{ py: 1}}>
        RESUME
        </Button>
        </Grid>
        </Grid>
        </Box>
    </Container>
  );
};

export default HomePage;