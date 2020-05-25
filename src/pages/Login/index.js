import React from 'react';
import { navigate } from 'gatsby';
import Form from '../../components/Form';
import View from '../../components/View';
import { handleLogin, isLoggedIn } from '../../utils/auth';
import SEO from '../../components/seo';

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }; //eslint-disable-line

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    handleLogin(this.state);
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`);
    }

    return (
      <>
        <SEO title="Login" />
        <View title="Log In">
          <Form
            handleUpdate={(e) => this.handleUpdate(e)}
            handleSubmit={(e) => this.handleSubmit(e)}
          />
        </View>
      </>
    );
  }
}

export default Login;
