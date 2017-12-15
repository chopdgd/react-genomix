import React from 'react'

// Demo Components
import Example from './components/Example'
import SecondExample from './components/SecondExample'
import Buttons from './components/Buttons'
import Icons from './components/Icons'
import Forms from './components/Forms'
import BigDataTableExample from './components/BigDataTableExample'
import ExampleTableCells from './components/TableCellExamples'
import AutoCompleteDropDown from '../lib/atoms/dropdowns/autocomplete-dropdown'
import TurnAroundTimeProgress from '../lib/atoms/progress-bars/turn-around-time-progress'

const App = () => (
  <div>
    <Example />
    <SecondExample />
    <Buttons />
    <Icons />
    <TurnAroundTimeProgress
      target={40}
      start="12-11-2017"
      // signout="12-17-2017"
    />
    <AutoCompleteDropDown
      search={true}
      selection={true}
      endpoint="testAPI?search="
      onChange={(props) => alert(JSON.stringify(props))}
      searchAction={(props) => alert(JSON.stringify(props))}
    />
    <Forms />
    <ExampleTableCells />
    <BigDataTableExample />
  </div>
)

export default App;
