import React from 'react'
import { Container } from 'semantic-ui-react'

import { LoginForm } from '../../../src'

const LoginFormExample = props => {
  return (
    <Container align="center">
      <LoginForm handleLogin={props => alert(JSON.stringify(props))} />
    </Container>
  )
}

export default LoginFormExample
