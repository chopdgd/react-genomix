import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { map, omit } from 'lodash'

import { ExportButton } from '../../index'


describe('Test ExportButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ExportButton />, div)
  })

  it('onExport is called w/ data onClick', () => {
    const onExport = jest.fn()
    onExport.mockReturnValueOnce([{ test: 1 }])
    const wrapper = shallow(
      <ExportButton
        data={[{ test: 1 }]}
        content="Export Me"
        filenamePrefix="newPrefix"
        onExport={onExport}
      />
    )

    wrapper.find('CSVLink').props().children.props.onClick()
    expect(onExport).toHaveBeenCalledWith([{ test: 1 }])
  })

  it('onExport is called and affects data', () => {
    const onExport = (data) => {
      const elements = []
      map(data, element => (
          elements.push(omit(element, ['test2']))
      ))
      return elements
    }

    const wrapper = shallow(
      <ExportButton
        data={[{ test: 1, test2: 2 }]}
        content="Export Me"
        filenamePrefix="newPrefix"
        onExport={onExport}
      />
    )

    wrapper.find('CSVLink').props().children.props.onClick()
    expect(wrapper.state().data).toEqual([{ "test": 1 }])
  })

  it('onExport is called and does not affect data', () => {
    const wrapper = shallow(
      <ExportButton
        data={[{ test: 1, test2: 2 }]}
        content="Export Me"
        filenamePrefix="newPrefix"
      />
    )

    wrapper.find('CSVLink').props().children.props.onClick()
    expect(wrapper.state().data).toEqual([{ test: 1, test2: 2 }])
  })

  it('onClick is passed and called', () => {
    const onClick = jest.fn()
    const wrapper = shallow(
      <ExportButton
        data={[{ test: 1, test2: 2 }]}
        filenamePrefix="newPrefix"
        onClick={onClick}
      />
    )

    wrapper.find('Button').simulate('click', {'hi': 1}, 'Mike')
    expect(onClick).toHaveBeenCalledWith({"hi": 1}, 'Mike')
  })
})
