import React from 'react'
import ReactDOM from 'react-dom'
import { Table } from 'semantic-ui-react'
import { mount } from 'enzyme'

import InfiniteScrollTable from './inifinite-scroll-table'


const TestTable = ({ ...props }) => {
  return (
    <InfiniteScrollTable {...props} className="test-table" headerCells={['Column 1']}>
      {Array.from(new Array(100), (x,i) =>
        <Table.Row key={i}>
          <Table.Cell>Cell1</Table.Cell>
        </Table.Row>
      )}
    </InfiniteScrollTable>
  )
}


describe('Test InfiniteScrollTable', () => {
  it('InfiniteScrollTable renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(TestTable(), div)
  })

  it('InfiniteScrollTable initial props are set correctly', () => {
    const wrapper = mount(TestTable())
    expect(wrapper.find('InfiniteScrollTable').props().headerCells).toEqual(['Column 1'])
    expect(wrapper.find('InfiniteScrollTable').props().next).toEqual(undefined)
    expect(wrapper.find('InfiniteScrollTable').props().loading).toEqual(false)
    expect(wrapper.find('InfiniteScrollTable').props().className).toEqual('test-table')
    expect(wrapper.find('Table').props().className).toEqual('test-table genomix infinite')
  })

  it('InfiniteScrollTable defaultValues state are set correctly', () => {
    const wrapper = mount(TestTable({ next: 'next', loading: false }))
    expect(wrapper.state().next).toEqual('next')
    expect(wrapper.state().loading).toEqual(false)
  })

  it('InfiniteScrollTable fetchData should be called when onBottomVisible is fired', () => {
    const fetchData = jest.fn()
    const wrapper = mount(TestTable({ next: 'next', fetchData: fetchData }))
    expect(wrapper.state().next).toEqual('next')

    wrapper.find('Visibility').prop('onBottomVisible')();
    expect(fetchData).toHaveBeenCalledTimes(1)
    expect(fetchData).toHaveBeenCalledWith('next')
  })

  it('InfiniteScrollTable fetchData should not be called when onBottomVisible is fired and next is not defined', () => {
    const fetchData = jest.fn()
    const wrapper = mount(TestTable({ next: null, fetchData: fetchData }))

    wrapper.find('Visibility').prop('onBottomVisible')();
    expect(fetchData).toHaveBeenCalledTimes(0)

    wrapper.setProps({ next: undefined });
    wrapper.find('Visibility').prop('onBottomVisible')();
    expect(fetchData).toHaveBeenCalledTimes(0)

    wrapper.setProps({ next: '' });
    wrapper.find('Visibility').prop('onBottomVisible')();
    expect(fetchData).toHaveBeenCalledTimes(0)
  })

  it('InfiniteScrollTable state updates when new props are recieved', () => {
    const wrapper = mount(TestTable({ next: 'next', loading: false }))

    expect(wrapper.state().next).toEqual('next')
    expect(wrapper.state().loading).toEqual(false)

    wrapper.setProps({ next: 'next', loading: false });
    expect(wrapper.state().next).toEqual('next')
    expect(wrapper.state().loading).toEqual(false)

    wrapper.setProps({ next: 'next2', loading: true });
    expect(wrapper.state().next).toEqual('next2')
    expect(wrapper.state().loading).toEqual(true)
  })
})
