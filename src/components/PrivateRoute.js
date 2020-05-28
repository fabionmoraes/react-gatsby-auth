import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

const PrivateRoute = ({ component: Component, location, signed, ...rest }) => {
  if (!signed && location.pathname !== `/app/login`) {
    // If we’re not logged in, redirect to the home page.
    navigate(`/app/login`);
    return null;
  }

  return <Component {...rest} />;
};

PrivateRoute.propTypes = {
  signed: PropTypes.bool,
  component: PropTypes.any.isRequired,
};

PrivateRoute.defaultProps = {
  signed: false,
};

export default PrivateRoute;
