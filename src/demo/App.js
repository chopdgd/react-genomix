import React from 'react'
import { Divider, Tab } from 'semantic-ui-react'

// Demo Components
import Example from './components/Example'
import SecondExample from './components/SecondExample'

// Atoms
import Buttons from './components/Buttons'
import Dropdowns from './components/Dropdowns'
import Icons from './components/Icons'
import Links from './components/Links'
import ProgressBars from './components/ProgressBars'
import TableCellExamples from './components/TableCellExamples'

// Molecules
import Forms from './components/Forms'
import Modals from './components/Modals'
import BigDataTableExample from './components/BigDataTableExample'
import FixedDataTableExample from './components/FixedDataTableExample'

// Organisms
import LoginFormExample from './components/LoginFormExample'

const panes = [
  {
    menuItem: 'Buttons',
    render: () => <Tab.Pane><Buttons /></Tab.Pane>
  },
  {
    menuItem: 'Dropdowns',
    render: () => <Tab.Pane><Dropdowns /></Tab.Pane>
  },
  {
    menuItem: 'Icons',
    render: () => <Tab.Pane><Icons /></Tab.Pane>
  },
  {
    menuItem: 'Links',
    render: () => <Tab.Pane><Links /></Tab.Pane>
  },
  {
    menuItem: 'Progress Bars',
    render: () => <Tab.Pane><ProgressBars /></Tab.Pane>
  },
  {
    menuItem: 'Table Cells',
    render: () => <Tab.Pane><TableCellExamples /></Tab.Pane>
  },
  {
    menuItem: 'Forms',
    render: () => <Tab.Pane><Forms /></Tab.Pane>
  },
  {
    menuItem: 'LoginForm',
    render: () => <Tab.Pane><LoginFormExample /></Tab.Pane>
  },
  {
    menuItem: 'Modals',
    render: () => <Tab.Pane><Modals /></Tab.Pane>
  },
  {
    menuItem: 'Big Data Table',
    render: () => <Tab.Pane><BigDataTableExample /></Tab.Pane>
  },
  {
    menuItem: 'Fixed Data Table',
    render: () => <Tab.Pane><FixedDataTableExample /></Tab.Pane>
  },
]


const App = () => (
  <div>
    <Example />
    <SecondExample />
    <Divider />
    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
  </div>
)

export default App
