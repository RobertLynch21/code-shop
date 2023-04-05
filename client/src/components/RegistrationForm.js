import React, { useState } from 'react';
import '../styles/RegistrationForm.css'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
    } else {
      console.log('Registration successful');
      // Perform registration logic (API call)
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Register</h1>
      <form onSubmit={handleSubmit}>
        <label className="form-label">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className="form-input"
        />
        <label className="form-label">Email Address</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className="form-input"
        />
        <label className="form-label">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          className="form-input"
        />
        <label className="form-label">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          className="form-input"
        />
        <button type="submit" className="form-btn">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
