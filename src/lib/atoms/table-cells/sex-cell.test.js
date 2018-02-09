import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { SexCell } from 'LibIndex'


describe('Test SexCell', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SexCell />, div)
  })

  it('ensure iconProps are spread to icon', () => {
    const wrapper = shallow(<SexCell as="td" iconProps={{ size: 'large' }} />)
    expect(wrapper.find('QuestionIcon').props()).toEqual({ size: 'large' })
  })

  it('ensure it renders QuestionIcon w/ unknown sex', () => {
    const wrapper = shallow(<SexCell />)
    expect(wrapper.find('QuestionIcon')).toHaveLength(1)
  })

  it('ensure it renders MaleIcon w/ male sex', () => {
    const wrapper = shallow(<SexCell sex={1} />)
    expect(wrapper.find('MaleIcon')).toHaveLength(1)
  })

  it('ensure it renders FemaleIcon w/ female sex', () => {
    const wrapper = shallow(<SexCell sex={2} />)
    expect(wrapper.find('FemaleIcon')).toHaveLength(1)
  })
})
