import React from 'react';
import Login from './Login.jsx';
import { Container, Typography, Box, Paper } from '@mui/material';

function Hero() {
  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Paper elevation={3} sx={{ p: 4, width: '100%', borderRadius: 3 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Welcome to the farm
          </Typography>
          <Login />
        </Box>
      </Paper>
    </Container>
  );
}

export default Hero;