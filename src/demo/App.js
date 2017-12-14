import React from 'react'

// Demo Components
import Example from './components/Example'
import SecondExample from './components/SecondExample'
import Buttons from './components/Buttons'

import NavbarExample from './components/NavbarExample'
import Icons from './components/Icons'
import Forms from './components/Forms'
import BigDataTableExample from './components/BigDataTableExample'
import ExampleTableCells from './components/TableCellExamples'


const App = () => (
  <div>
    <NavbarExample />
    <Example />
    <SecondExample />
    <Buttons />
    <Icons />
    <Forms />
    <ExampleTableCells />
    <BigDataTableExample />
  </div>
)

export default App;
