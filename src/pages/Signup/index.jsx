import React from 'react';

import { Link } from 'react-router-dom';

import login_image from '../../images/login.jpg';
import profile from '../../images/profile.png';
import key from '../../images/Key.png';

import './style.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className='contain'>
        <img src={login_image}  className='login_image' />
        <div class="text">
          <span style={{color: '#4EFFBB'}}>Join us</span> on<br/>
          the journey of <br/>
          Neurotic<br/>
          Revolution</div>
      </div>
      <div className='credentials'>
        <h2>User Login</h2>
        
        <form>
          
        <div className="form-group">
            <input type="text" id="email" name="email" placeholder={'email'} required />
          </div>
          <div className="form-group">
            <input type="username" id="username" name="username" placeholder="Username" required />
          </div>
          <div className="form-group">
            <input type="password" id="password" name="password" placeholder="Password" required />
          </div>
          <center><Link to="/login"><button type="submit" className='button'>Signup</button></Link></center>
          <br/>
          <center><Link to="/login"><button type="submit" className='button other-button'>Login</button></Link></center>
        </form>
      </div>
    </div>
  );
};

export default Login;
