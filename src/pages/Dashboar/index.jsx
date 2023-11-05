// Dashboard.js (React component)
import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Welcome to the Dashboard</h2>
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
  );
};

export default Dashboard;
