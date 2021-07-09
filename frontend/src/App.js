import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import './App.css';
import Users from './pages/users/Users';
import NewPlaces from './pages/places/NewPlace';
import UserPlaces from './pages/places/UserPlaces';
import MainNavigation from './components/shared/Navigation/MainNavigation';

const App = () => {
  return (
  <Router>
    <MainNavigation/>
    <main>
      <Switch>
        <Route path="/" exact={true}>
          <Users/>
        </Route>
        <Route path="/:userId/places" exact><UserPlaces/></Route>
        <Route path="/places/new" exact>
          <NewPlaces/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </main>
  </Router>);
};

export default App;
