import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { BasicLabel } from 'LibIndex'


describe('Test Basic Label', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BasicLabel content="hi" />, div)
  })

  it('props are spread correctly', () => {
    const content = 'google'
    const size = 'tiny'
    const wrapper = shallow(<BasicLabel content={content} size={size} />)
    expect(wrapper.find('Label').props().size).toEqual(size)
    expect(wrapper.find('Label').props().content).toEqual(content)
  })
})
