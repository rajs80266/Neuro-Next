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
          <Link to="/take-photo"><button className="option-button">Take Image</button></Link>
        </div>
        <div className="option">
          <Link to="/questionnaire"><button className="option-button">Take Questionnaire</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
