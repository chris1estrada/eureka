import React, { createContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/about/about.component';
import DetailsPage from './pages/details/details.component';
import LoginPage from './pages/login/login.component';
import UserRegistrationPage from './pages/register/user-registration-page';
import BusinessRegistrationPage from './pages/register/business-registration-page';
import AccountPage from './pages/account/account.component';
import Header from './components/header/header.component';

import { useAuth } from './hooks/useAuth'

const App = () => {
  const { isAuthenticated } = useAuth()
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route path="/account/:display_name" component={AccountPage} />
        <Route path="/details/:bid" component={DetailsPage} />
        <Route
          exact
          path="/login"
          render={() => isAuthenticated() ? <Redirect to='/' /> : <LoginPage />}
        />
        <Route exact path="/accounts/users" component={UserRegistrationPage} />
        <Route exact path="/accounts/businesses" component={BusinessRegistrationPage} />
        <Route component={() => (
          <h1> Oops! Page not found!</h1>
        )} />
      </Switch>
    </div>
  );
}

export default App;
