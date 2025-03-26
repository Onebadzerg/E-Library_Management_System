
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInForm from './SignIn';
import SignUpForm from './SignUp';
import Dashboard from './Dashboard';
import './styles.css';

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
