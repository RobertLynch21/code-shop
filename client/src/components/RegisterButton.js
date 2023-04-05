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
      <button className='register-btn' type="button" onClick={handleClick}>
        Register
      </button>
    );
  };
  
  export default RegisterButton;