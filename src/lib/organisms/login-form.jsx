import React from 'react'
import PropTypes from 'prop-types'
import { Form, Message } from 'semantic-ui-react'

import Button from 'LibSrc/atoms/buttons/Button'


class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      loading: props.loading,
      error: props.error,
    }

  }

  componentWillReceiveProps(nextProps) {
    const nextState = {};

    nextState.loading = nextProps.loading;
    nextState.error = nextProps.error;

    if (nextProps.error.response === undefined) {
          nextState.errorMessage = `Server error! Please inform us about this error! Error: ${nextProps.error}`;
      } else if (nextProps.error !== undefined) {
        if (nextProps.error.response.status === 400) {
          nextState.errorMessage = 'Incorrect credentials. Please try again!';
      } else {
        nextState.errorMessage = `Uncaught Error: ${nextProps.error}. Please report this to us`;
      }
    }

    this.setState(nextState);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      error: undefined,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const empty = [null, undefined, ''];

    if (empty.includes(this.state.username) || empty.includes(this.state.password)) {
      this.setState({
        error: 'username/password are required',
        errorMessage: 'Username and Password are required!',
      });
    } else {
      this.setState({ loading: true });

      this.props.login({
        username: this.state.username,
        password: this.state.password,
      });
    }

  }

  render() {
    return(
      <Form
          id="login-form"
          className="login-form"
          size="large"
          key="big"
          onSubmit={this.handleSubmit}
          loading={this.state.loading}
        >
          <Form.Field>
            <Form.Input
              className="login-input"
              id="username"
              placeholder="Username"
              icon="user"
              iconPosition="left"
              required
              onChange={this.handleChange}
            />
          </Form.Field>
          <br />
          <Form.Field>
            <Form.Input
              id="password"
              placeholder="Password"
              type="password"
              required
              icon="lock"
              iconPosition="left"
              onChange={this.handleChange}
            />
          </Form.Field>
          <br />
          <div className="login-button-div">

          {this.state.error !== undefined
            ? <Message negative>
               <Message.Header as="h5">Login Failed</Message.Header>
               <p>{this.state.errorMessage}</p>
              </Message>
            : ''
          }

          <Button
              className="login-button"
              text="Sign In"
              primary
              fluid
              size="large"
              onClick={this.handleSubmit}
          >Sign In
          </Button>
          </div>
        </Form>
    )
  }
}


LoginForm.propTypes = {
  login: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.object,
};

LoginForm.defaultProps = {
  loading: false,
  error: undefined,
};

export default LoginForm;
