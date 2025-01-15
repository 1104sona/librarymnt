// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CircularProgress
} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DownloadIcon from '@mui/icons-material/Download';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import QrCodeIcon from '@mui/icons-material/QrCode';
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import axios from 'axios';

const HomePage = () => {
  const [stats, setStats] = useState({
    totalBooks: 0,
    uniqueAuthors: 0,
    recentBook: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/books')
      .then(res => {
        const books = res.data;
        const uniqueAuthors = new Set(books.map(book => book.author)).size;
        const recentBook = books.sort((a, b) =>
          new Date(b.published_date) - new Date(a.published_date)
        )[0];

        setStats({
          totalBooks: books.length,
          uniqueAuthors,
          recentBook
        });
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching stats:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }
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
      {/* Stats Cards */}
      <Grid container spacing={4} mb={6}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <MenuBookIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  {stats.totalBooks}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Total Books
                </Typography>
              </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <PersonIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  {stats.uniqueAuthors}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Unique Authors
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <CalendarTodayIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  Latest Book
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {stats.recentBook?.title || 'No books yet'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
          
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
              startIcon={<LibraryBooksIcon />}
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
              to="/search"
              color="primary"
              size="large"
              fullWidth
              variant="outlined"
              startIcon={<SearchIcon />}
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
             Search Books 
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/export"
              color="primary"
              size="large"
              fullWidth
              variant="outlined"
              startIcon={<DownloadIcon />}
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
              Export Data
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/qr-codes"
              color="primary"
              size="large"
              fullWidth
              variant="outlined"
              startIcon={<QrCodeIcon />}
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
             QR Codes
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component= "a"
              href='https://github.com/1104sona/librarymnt'
              to="/github"
              color="primary"
              size="large"
              fullWidth
              variant="outlined"
              startIcon={<GitHubIcon />}
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
              component= "a"
              href='https://docs.google.com/document/d/1ieXROySP4bB7bl0Wr0whB3P3Kzgb4F73k8W3vmxdGbs/edit?tab=t.0'
              to="/documentation"
              color="primary"
              size="large"
              fullWidth
              variant="outlined"
              startIcon={<InsertDriveFileIcon />}
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
              Documentation
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component="a"
              href="https://drive.google.com/file/d/1g4sCAGCihn7bHQN-SicyUKA5zQj7rYQo/view?usp=sharing"
              color="primary"
              size="large"
              fullWidth
              variant="outlined"
              startIcon={<ContactPageIcon />}
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
