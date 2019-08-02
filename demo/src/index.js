import React from 'react'
import { render } from 'react-dom'
import { Divider, Tab, Sidebar, Menu } from 'semantic-ui-react'

import '../../dist/react-genomix.min.css'
import './index.css'

import * as GenomiX from '../../src'

// Demo Components
import Example from './components/Example'
import SecondExample from './components/SecondExample'
import Buttons from './components/Buttons'
import Dropdowns from './components/Dropdowns'
import Icons from './components/Icons'
import Links from './components/Links'
import ProgressBars from './components/ProgressBars'
import Forms from './components/Forms'
import LoginFormExample from './components/LoginFormExample'
import Modals from './components/Modals'
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
    menuItem: 'Table',
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
