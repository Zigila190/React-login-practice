import  React from 'react';
import {BrowserRouter as Router, Route,Routes, Navigate} from 'react-router-dom';
import LandingPage from './components/landingpage/LandigPage';
import Register from './components/registration/register';
import ForgotPassword from './components/forgotpassword/ForgotPassword';

function App() {
  return (
    <Router>

    <Routes>
      <Route path = "/" element={<LandingPage />} />
      <Route path = "/Registration" element={<Register />} />
      <Route path = "/ForgotPassword" element={<ForgotPassword />} />
      <Route path = "*" element={<Navigate />} />
      </Routes>
      </Router>
  );
}

  

export default App;
