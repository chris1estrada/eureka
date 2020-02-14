import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/about/about.component';
import DetailsPage from './pages/details/details.component';
import LoginPage from './pages/login/login.component';
import RegisterPage from './pages/register/register.component';
import AccountPage from './pages/account/account.component';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route path="/account" component={AccountPage} />
        <Route path="/details" component={DetailsPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route component={() => (
          <h1> Oops! Page not found!</h1>
        )} />
      </Switch>
    </div>
  );
}

export default App;
