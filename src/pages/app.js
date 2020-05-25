import React from 'react';
import { Router } from '@reach/router'; //eslint-disable-line
import Layout from '../components/Layout';
import Profile from './Profile';
import Details from '../components/Details';
import Login from './Login';
import PrivateRoute from '../components/PrivateRoute';
import Status from '../components/Status';
import '../config/ReactotronConfig';

const App = () => (
  <Layout>
    <Status />
    <Router>
      <PrivateRoute path="/app/details" component={Details} />
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
    </Router>
  </Layout>
);

export default App;
