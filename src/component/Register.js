// src/component/Register.js
import React, { useState } from 'react';
import { registerUser } from '../utils/api';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser({ email, password });
      if (data.msg) {
        setError(null);
        alert('User registered successfully');
      } else {
        setError(data.msg);
      }
    } catch (err) {
      console.error(err);
      setError('Registration failed');
    }
  };

  return (
    <div className='register-container'>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
