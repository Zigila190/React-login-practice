import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/forgot-password', {
        email,
      });
      console.log('Reset link sent:', response.data);
    } catch (error) {
      console.error('Error sending reset link:', error.response?.data?.msg || error.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Paper elevation={3} sx={{ p: 4, width: '100%', borderRadius: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
          Forgot Password
        </Typography>
        <Typography variant="body2" gutterBottom sx={{ textAlign: 'center' }}>
          Enter your email to receive a password reset link.
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{ style: { color: '#666666' } }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, py: 1.5 }}
          >
            Send Reset Link
          </Button>
          <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
            Back to{' '}
            <Link to="/" sx={{ color: 'tertiary.main' }}>
              Login
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default ForgotPassword;