import React from 'react'
import { render } from 'react-dom'
import { Divider, Tab, Sidebar, Menu } from 'semantic-ui-react'

import '../../dist/react-genomix.min.css'
import './index.css'

import * as GenomiX from '../../src'

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
import LoginFormExample from './components/LoginFormExample'
import Modals from './components/Modals'
import FixedDataTableExample from './components/FixedDataTableExample'
import InfiniteScrollTableExample from './components/InfiniteScrollTableExample'
import BasicTableExample from './components/BasicTableExample'
import SelectionTableExample from './components/SelectionTableExample'
import InfiniteTableExample from './components/InfiniteTableExample'

// Organisms
import NavbarExample from './components/NavbarExample'

import Table from './components/Table'

const panes = [
  {
    menuItem: 'Buttons',
    render: () => (
      <Tab.Pane>
        <Buttons />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Dropdowns',
    render: () => (
      <Tab.Pane>
        <Dropdowns />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Icons',
    render: () => (
      <Tab.Pane>
        <Icons />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Links',
    render: () => (
      <Tab.Pane>
        <Links />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Progress Bars',
    render: () => (
      <Tab.Pane>
        <ProgressBars />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Table Cells',
    render: () => (
      <Tab.Pane>
        <TableCellExamples />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Forms',
    render: () => (
      <Tab.Pane>
        <Forms />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'LoginForm',
    render: () => (
      <Tab.Pane>
        <LoginFormExample />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Modals',
    render: () => (
      <Tab.Pane>
        <Modals />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Fixed Data Table',
    render: () => (
      <Tab.Pane>
        <FixedDataTableExample />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Infinite Scroll Table',
    render: () => (
      <Tab.Pane>
        <InfiniteScrollTableExample />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Basic Table',
    render: () => (
      <Tab.Pane>
        <BasicTableExample />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Selection Table',
    render: () => (
      <Tab.Pane>
        <SelectionTableExample />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Infinite Table',
    render: () => (
      <Tab.Pane>
        <InfiniteTableExample />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Test Table',
    render: () => (
      <Tab.Pane>
        <Table />
      </Tab.Pane>
    ),
  },
]

const Demo = () => {
  const [state, setState] = GenomiX.hooks.useLocalStorage('sidebar', { visible: true })

  return (
    <Sidebar.Pushable>
      <Sidebar className="genomix-sidebar" as={Menu} animation="push" width="thin" vertical visible={state.visible}>
        <br />
        <br />
        <br />
        <Menu.Item>Nexus</Menu.Item>
        <Menu.Item>Primer Bank</Menu.Item>
        <Menu.Item>Documentation</Menu.Item>
        <Menu.Item>Report Issue</Menu.Item>
      </Sidebar>
      <Sidebar.Pusher>
        <div>
          <NavbarExample navCallback={() => setState({ ...state, visible: !state.visible })} />
          <Example />
          <SecondExample />
          <Divider />
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </div>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

render(<Demo />, document.querySelector('#demo'))
