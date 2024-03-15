// LoginPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ registeredUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === registeredUser.username && password === registeredUser.password) {
      setLoginStatus('Login successful!');
    } else {
      setLoginStatus('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {loginStatus && <p>{loginStatus}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>Not a user? <Link to="/register">Register</Link></p>
    </div>
  );
};

export default Login;
