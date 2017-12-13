import React from 'react'
import { Grid } from 'semantic-ui-react'

// Demo Components
import Example from './components/Example'
import SecondExample from './components/SecondExample'
import Buttons from './components/Buttons'
import Icons from './components/Icons'
import Forms from './components/Forms'
import BigDataTableExample from './components/BigDataTableExample'


const App = () => (
  <div>
    <Example />
    <SecondExample />
    <Buttons />
    <Icons />
    <Forms />
    <Grid>
      <Grid.Column width={8}>
        <BigDataTableExample />
      </Grid.Column>
    </Grid>

  </div>
)

export default App;
