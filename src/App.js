import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';

import Shell from './Shell';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import PhotoUploader from './pages/PhotoUploader';
import QuestionsPage from './pages/Questions';
import Assesment from './pages/Assessment';

const App = () => {
  return (
    <BrowserRouter>
      <Shell>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomePage />}
          />
          <Route
            exact
            path="/login"
            render={() => <Login />}
          />
          <Route
            exact
            path="/register"
            render={() => <Signup />}
          />
          <Route
            exact
            path="/dashboard"
            render={() => <Dashboard />}
          />
          <Route
            exact
            path="/take-photo"
            render={() => <PhotoUploader />}
          />
          <Route
            exact
            path="/questionnaire"
            render={() => <QuestionsPage />}
          />
          <Route
            exact
            path="/assessment"
            render={() => <Assesment />}
          />
        </Switch>
      </Shell>
    </BrowserRouter>
  );
};

export default App;