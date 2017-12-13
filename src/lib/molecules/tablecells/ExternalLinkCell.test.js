import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import { Table } from 'semantic-ui-react'

import ExternalLinkCell from './ExternalLinkCell'

const TestExternalLinkCell = ({...props}) => {
  return (
    <Table>
      <Table.Body>
        <Table.Row>
          <ExternalLinkCell
            {...props}
            content="test"
            url="http://google.com"
          />
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

describe('Test ExternalLinkCell', () => {
  it('ExternalLinkCell renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(TestExternalLinkCell(), div)
  })

  it('ExternalLinkCell initial props are set correctly', () => {
    const wrapper = mount(TestExternalLinkCell())
    expect(wrapper.find('ExternalLinkCell').props().content).toEqual('test')
    expect(wrapper.find('ExternalLinkCell').props().url).toEqual('http://google.com')
  })
})
