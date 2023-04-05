import React from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import { Route, Routes } from 'react-router';
import LoginButton from './components/LoginButton';
import RegistrationForm from './components/RegistrationForm'


function App() {
  return (
  <Routes>
  <Route path="/" element={<WelcomeScreen />} />
  <Route path="/login" element={<LoginButton />} />
  <Route path="/register" element={<RegistrationForm />} />
</Routes>
  )
}

export default App;
