import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import { SexFixedCell } from '../index'

describe('Test SexFixedCell', () => {
  const data = [{ sex: 'male' }, { sex: 'f' }, { sex: 'unknown' }]

  it('renders without crashing', () => {
    const div = document.createElement('div')
    const element = <SexFixedCell data={data} rowIndex={1} columnKey="sex" />
    ReactDOM.render(element, div)
  })

  it('renders the first record with rowIndex = 0', () => {
    const element = <SexFixedCell data={data} rowIndex={0} columnKey="sex" />
    const wrapper = shallow(element)
    expect(wrapper.find('MaleIcon')).toHaveLength(1)
  })

  it('renders the second record with rowIndex = 1', () => {
    const element = <SexFixedCell data={data} rowIndex={1} columnKey="sex" />
    const wrapper = shallow(element)
    expect(wrapper.find('FemaleIcon')).toHaveLength(1)
  })

  it('renders the third record with rowIndex = 2', () => {
    const element = <SexFixedCell data={data} rowIndex={2} columnKey="sex" />
    const wrapper = shallow(element)
    expect(wrapper.find('QuestionIcon')).toHaveLength(1)
  })
})
