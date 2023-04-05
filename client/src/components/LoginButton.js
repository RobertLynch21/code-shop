import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginButton.css';

const LoginButton = () => {
  return (
    <Link to="/login">
      <button className='login-btn'>Login</button>
    </Link>
  );
}

export default LoginButton;
