import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        username,
        password,
      });
      const { token } = response.data;
      Cookies.set('token', token, { expires: 1 });
      console.log('Login successful, token stored');
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error.response?.data?.msg || error.message);
      navigate('/forgot-password');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        InputLabelProps={{ style: { color: '#666666' } }} // Secondary text color
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputLabelProps={{ style: { color: '#666666' } }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2, py: 1.5 }}
      >
        Login
      </Button>
      <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
        Don't have an account?{' '}
        <Link to="/register" sx={{ color: 'tertiary.main' }}>
          Register here
        </Link>
      </Typography>
    </Box>
  );
}

export default Login;