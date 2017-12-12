import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import { Table } from 'semantic-ui-react'

import TextCell from './TextCell'

const TestTextCell = ({...props}) => {
  return (
    <Table>
      <Table.Body>
        <Table.Row>
          <TextCell
            {...props}
            content="test"
          />
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

describe('Test TextCell', () => {
  it('TextCell renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(TestTextCell(), div)
  })

  it('TextCell initial props are set correctly', () => {
    const wrapper = mount(TestTextCell())
    expect(wrapper.find('TextCell').props().content).toEqual('test')
  })
})
