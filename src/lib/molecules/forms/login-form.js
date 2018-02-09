import React from 'react'
import PropTypes from 'prop-types'
import { Form, Message } from 'semantic-ui-react'

import { Button } from 'LibIndex'


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
    const { loading, error } = this.props

    if (nextProps.loading !== loading) {
      this.setState({ loading: nextProps.loading })
    }

    if (nextProps.error !== error) {
      this.setState({ error: nextProps.error })
    }
  }

  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value,
      error: undefined,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { username, password } = this.state
    const { handleLogin } = this.props

    if (!username || !password) {
      this.setState({
        error: 'Username and Password are required!',
      })
    } else {
      handleLogin({
        username,
        password
      })

      this.setState({ loading: true })
    }
  }

  render() {
    const { loading, error, username, password } = this.state

    return(
      <Form
          id="login-form"
          className="login-form"
          size="large"
          key="big"
          onSubmit={this.handleSubmit}
          loading={loading}
        >
          <Form.Input
            id="username"
            name="username"
            className="login-input"
            placeholder="Username"
            icon="user"
            iconPosition="left"
            required
            onChange={this.handleChange}
          />
          <Form.Input
            id="password"
            name="password"
            className="login-input"
            placeholder="Password"
            icon="lock"
            iconPosition="left"
            required
            onChange={this.handleChange}
            type="password"
          />

          {error
            ? <Message negative>
               <Message.Header as="h5">Login Failed</Message.Header>
               <p>{error}</p>
              </Message>
            : ''
          }

          <Button
            className="login-button"
            type="submit"
            form="login-form"
            content="Sign In"
            primary
            fluid
            size="large"
            disabled={!username || !password}
          />
        </Form>
    )
  }
}


LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
}

LoginForm.defaultProps = {
  loading: false,
  error: undefined,
}


export default LoginForm
