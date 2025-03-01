import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container, Paper, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

function Register() {
  const [surname, setSurname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [stateOfOrigin, setStateOfOrigin] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/register', {
        surname,
        firstname,
        gender,
        email,
        password,
        stateOfOrigin,
      });
      const { token } = response.data;
      Cookies.set('token', token, { expires: 1 });
      console.log('Registration successful, token stored');
      navigate('/');
    } catch (error) {
      console.error('Registration failed:', error.response?.data?.msg || error.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Paper elevation={3} sx={{ p: 4, width: '100%', borderRadius: 3 }}>
        <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Surname"
            variant="outlined"
            fullWidth
            margin="normal"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
            InputLabelProps={{ style: { color: '#666666' } }}
          />
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
            InputLabelProps={{ style: { color: '#666666' } }}
          />
          <TextField
            select
            label="Gender"
            variant="outlined"
            fullWidth
            margin="normal"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            InputLabelProps={{ style: { color: '#666666' } }}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            InputLabelProps={{ style: { color: '#666666' } }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            InputLabelProps={{ style: { color: '#666666' } }}
          />
          <TextField
            label="State of Origin"
            variant="outlined"
            fullWidth
            margin="normal"
            value={stateOfOrigin}
            onChange={(e) => setStateOfOrigin(e.target.value)}
            required
            InputLabelProps={{ style: { color: '#666666' } }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, py: 1.5 }}
          >
            Register
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            sx={{ mt: 1, py: 1.5 }}
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>
          <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
            Already have an account?{' '}
            <Link to="/" sx={{ color: 'tertiary.main' }}>
              Login here
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default Register;