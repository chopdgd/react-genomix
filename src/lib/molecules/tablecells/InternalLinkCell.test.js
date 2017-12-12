import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'

import InternalLinkCell from './InternalLinkCell'

const TestInternalLinkCell = ({...props}) => {
  return (
    <InternalLinkCell
      {...props}
      content="test"
      url="/app/test/"
    />
  );
}

describe('Test InternalLinkCell', () => {
  it('InternalLinkCell renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(TestInternalLinkCell(), div)
  })

  it('InternalLinkCell initial props are set correctly', () => {
    const wrapper = mount(TestInternalLinkCell())
    expect(wrapper.find('InternalLinkCell').props().content).toEqual(['test'])
    expect(wrapper.find('ExternalLinkCell').props().url).toEqual(['/app/test/'])
  })
})
