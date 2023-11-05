import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import './style.css';

import logo from '../../images/logo.png';

const HomePage = () => {
  return (
    <div className="container">
      <img src={logo} height={300} className='logo'/>

      <div className="content">
        <h2>Content Below Image</h2>
        <p>Some text goes here.</p>
      </div>
      <center>
      <Link to="/login"><button className="button">Let's Get Started ></button></Link>
      </center>
    </div>
    )
  };

export default HomePage;
