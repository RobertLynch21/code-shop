import React from 'react';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';
import '../styles/WelcomeScreen.css';


const WelcomeScreen = () => {
  return (
    <div className='welcome-container'>
      <h1 className='welcome-title'>Welcome!</h1>
      <p>Please register or log in to continue.</p>
      <LoginButton />
      <RegisterButton />
    </div>
  );
};

export default WelcomeScreen;