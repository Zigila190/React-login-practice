import  React from 'react';
import {Route,Routes} from 'react-router-dom';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    

    <Routes>
      <Route path = "/" element={<Register />} />
      <Route path = "/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
    
  );
}

  

export default App;
