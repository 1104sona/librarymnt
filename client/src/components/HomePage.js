import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Grid } from '@mui/material';

const HomePage = () => {
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
      <Typography
        variant="h2"
        component="h1"
        sx={{
          color: 'text.primary',
          mb: 3,
          fontFamily: `'Playfair Display', serif`, // Classic font
        }}
      >
        Welcome to the Library Management System
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: 'text.secondary',
          mb: 5,
          fontFamily: `'Playfair Display', serif`, // Elegant font
        }}
      >
        Manage your books efficiently and effectively.
      </Typography>
      <Box mt={5}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/book-list"
              color="primary"
              size="large"
              fullWidth
              variant="outlined"
              sx={{
                py: 1,
                borderWidth: '2px',
                borderColor: 'primary.main',
                borderRadius: '8px',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: '#fff',
                },
              }}
            >
              View Books
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/book-export"
              color="primary"
              size="large"
              fullWidth
              variant="outlined"
              sx={{
                py: 1,
                borderWidth: '2px',
                borderColor: 'primary.main',
                borderRadius: '8px',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: '#fff',
                },
              }}
            >
              Download Book-list
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component= "a"
              href='https://github.com/1104sona/librarymnt'
              to="/github-icon"
              color="primary"
              size="large"
              fullWidth
              variant="outlined"
              sx={{
                py: 1,
                borderWidth: '2px',
                borderColor: 'primary.main',
                borderRadius: '8px',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: '#fff',
                },
              }}
            >
              GitHub
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component="a"
              href="https://docs.google.com/document/d/1yeICuOXo53lWL12QzrbZeTWO90BPCPmLdb3HVUaDbec/edit?tab=t.0"
              color="primary"
              size="large"
              fullWidth
              variant="outlined"
              sx={{
                py: 1,
                borderWidth: '2px',
                borderColor: 'primary.main',
                borderRadius: '8px',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: '#fff',
                },
              }}
            >
              RESUME
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
