import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import { map, omit } from 'lodash'

import { Button, ExportButton } from 'LibIndex'


describe('Test ExportButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ExportButton />, div)
  })

  it('initial props are set correctly', () => {
    const wrapper = mount(<ExportButton />)
    expect(wrapper.props().data).toEqual([])
    expect(wrapper.props().content).toEqual(<Button content="Export" icon="download" />)
    expect(wrapper.props().filenamePrefix).toEqual('export')
    expect(wrapper.props().onExport).toEqual(undefined)
  })

  it('non default props are set correctly', () => {
    const onExport = jest.fn()
    const wrapper = mount(
      <ExportButton
        data={[{ test: 1 }]}
        content="Export Me"
        filenamePrefix="newPrefix"
        onExport={onExport}
      />
    )

    expect(wrapper.props().data).toEqual([{ test: 1 }])
    expect(wrapper.props().content).toEqual('Export Me')
    expect(wrapper.props().filenamePrefix).toEqual('newPrefix')
    expect(wrapper.props().onExport).toEqual(onExport)
    expect(wrapper.state().data).toEqual([{ "test": 1 }])
  })

  it('onExport is called w/ data onClick', () => {
    const onExport = jest.fn()
    onExport.mockReturnValueOnce([{ test: 1 }])
    const wrapper = mount(
      <ExportButton
        data={[{ test: 1 }]}
        content="Export Me"
        filenamePrefix="newPrefix"
        onExport={onExport}
      />
    )

    wrapper.find('CSVLink').simulate('click')
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

    const wrapper = mount(
      <ExportButton
        data={[{ test: 1, test2: 2 }]}
        content="Export Me"
        filenamePrefix="newPrefix"
        onExport={onExport}
      />
    )

    wrapper.find('CSVLink').simulate('click')
    expect(wrapper.state().data).toEqual([{ "test": 1 }])
  })

  it('onExport is called and does not affect data', () => {
    const wrapper = mount(
      <ExportButton
        data={[{ test: 1, test2: 2 }]}
        content="Export Me"
        filenamePrefix="newPrefix"
      />
    )

    wrapper.find('CSVLink').simulate('click')
    expect(wrapper.state().data).toEqual([{ test: 1, test2: 2 }])
  })
})
