import React from 'react'
import { Container } from 'semantic-ui-react'

import { LoginForm } from 'lib'

class LoginFormExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {

    return (
      <Container align="center">
        <LoginForm handleLogin={(props) => alert(JSON.stringify(props)) }/>
      </Container>
    )
  }
}


export default LoginFormExample
