import React from 'react';
import { useSelector } from 'react-redux';
import { Router } from '@reach/router'; //eslint-disable-line
import PrivateRoute from '../components/PrivateRoute';

import Profile from '../pages/Profile';
import Login from '../pages/Login';

export default function Route() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Router>
        <PrivateRoute path="/app/profile" component={Profile} signed={!!profile} />
        <Login path="/app/login" />
    </Router>
  );
}
