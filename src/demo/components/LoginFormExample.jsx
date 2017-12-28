import React from 'react'
import { Container } from 'semantic-ui-react'

import { LoginForm } from 'LibIndex'

class LoginFormExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {

    return (
      <Container align="center">
        <LoginForm />
      </Container>
    )
  }
}


export default LoginFormExample;
