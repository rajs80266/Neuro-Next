import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <Link to="/dashboard"><button type="submit">Login</button></Link>
      </form>
      <p>Don't have an account? <Link to="/register">Register here</Link>.</p>
    </div>
  );
};

export default Login;
