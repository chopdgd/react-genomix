import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { TranscriptFixedCell } from 'LibIndex'


describe('Test TranscriptFixedCell', () => {
  const data = [
    { transcript: 'transcript' },
  ]

  it('renders without crashing', () => {
    const div = document.createElement('div')
    const element = (
      <TranscriptFixedCell
        data={data}
        rowIndex={0}
        columnKey="transcript"
      />
    )
    ReactDOM.render(element, div)
  })

  it('renders the first record with rowIndex = 0', () => {
    const element = (
      <TranscriptFixedCell
        data={data}
        rowIndex={0}
        columnKey="transcript"
      />
    )
    const wrapper = shallow(element)
    expect(wrapper.props().children).toHaveLength(3)
    expect(wrapper.props().children[0]).toEqual('transcript')
    expect(wrapper.props().children[2].props.href).toEqual('http://localhost:10000/show?request=transcript')
  })
})
