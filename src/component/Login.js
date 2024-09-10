// src/component/Login.js
import React, { useState } from 'react';
import { loginUser } from '../utils/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser({ email, password });
      if (data.token) {
        setToken(data.token); // Save the token for protected routes
        localStorage.setItem('token', data.token); // Save token in localStorage
        setError(null);
      } else {
        setError(data.msg);
      }
    } catch (err) {
      console.error(err);
      setError('Login failed');
    }
  };

  return (
    <div className='login-container'>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
