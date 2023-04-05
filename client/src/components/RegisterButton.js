import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/RegisterButton.css';

const RegisterButton = () => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/register');
    };
  
    return (
      <Link to="/register">
        <button className='register-btn'>Register</button>
      </Link>
    );
  }
  
  export default RegisterButton;