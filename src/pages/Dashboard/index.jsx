import React from 'react';

import { Link } from 'react-router-dom';

import login_image from '../../images/login.jpg';
import profile from '../../images/profile.png';
import key from '../../images/Key.png';

import './style.css';

const Dashboard = () => {
  return (
    <div className="login-container">
      <div className='contain'>
        <img src={login_image}  className='login_image' />
        <div class="text">
          Welcome <br/>
          <span style={{fontSize: '35px'}}>Dashboard</span>
        </div>
      </div>
      <div className='credentials'>
      <div className="options">
        <div className="option">
          <Link to="/assessment"><button className="option-button">Do an assesment</button></Link>
        </div>
        <div className="option">
          <Link to="/take-photo"><button className="option-button">Assesment Log</button></Link>
        </div>
        <div className="option">
          <Link to="/take-photo"><button className="option-button">About Neuro Nest</button></Link>
        </div>
        <div className="option">
          <Link to="/take-photo"><button className="option-button">Logout</button></Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
