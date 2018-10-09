import React from 'react'
import ReactDOM from 'react-dom'
import { Column } from 'react-virtualized'
import { mount } from 'enzyme'

import { BigDataTable } from '../../index'


const list = Array.from(new Array(1), (x,i) => ({
  name: 'Mike',
  description: 'Cool'
}))

const TestTable = ({ ...props }) => {
  return (
    <BigDataTable data={props.data}>
      <Column
        label="Name"
        dataKey="name"
        height={500}
        width={100}
      />
    </BigDataTable>
  )
}


describe('Test BigDataTable', () => {
  it('BigDataTable renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(TestTable(), div)
  })

  it('BigDataTable initial props are set correctly', () => {
    const wrapper = mount(TestTable({ data: list }))
    expect(wrapper.find('BigDataTable').props().data).toEqual([{ name: 'Mike', description: 'Cool' }])
    expect(wrapper.find('BigDataTable').props().height).toEqual(500)
    expect(wrapper.find('BigDataTable').props().headerHeight).toEqual(40)
    expect(wrapper.find('BigDataTable').props().headerTextAlign).toEqual('center')
    expect(wrapper.find('BigDataTable').props().rowHeight).toEqual(40)
    expect(wrapper.find('BigDataTable').props().rowTextAlign).toEqual('left')
    expect(wrapper.find('BigDataTable').props().scrollToIndex).toEqual(-1)

    expect(wrapper.find('Table').props().className).toEqual('genomix big-data table')
    expect(wrapper.find('Table').props().height).toEqual(500)
    expect(wrapper.find('Table').props().width).toEqual(0)
    expect(wrapper.find('Table').props().headerClassName).toEqual('header col')
    expect(wrapper.find('Table').props().headerHeight).toEqual(40)
    expect(wrapper.find('Table').props().rowHeight).toEqual(40)
    expect(wrapper.find('Table').props().rowCount).toEqual(1)
    expect(wrapper.find('Table').props().scrollToIndex).toEqual(-1)
  })

  it('BigDataTable defaultValues state are set correctly', () => {
    const wrapper = mount(TestTable({ data: list }))
    expect(wrapper.state().rows).toEqual([{ name: 'Mike', description: 'Cool' }])
  })

  it('BigDataTable defaultValues state are set correctly', () => {
    const wrapper = mount(TestTable({ data: list }))
    expect(wrapper.state().rows).toEqual([{ name: 'Mike', description: 'Cool' }])
  })

  it('BigDataTable loading state is correctly set when componentWillReceiveProps is fired', () => {
    const wrapper = mount(TestTable({ data: list }))

    expect(wrapper.state().loading).toEqual(false)
    wrapper.setProps({ loading: true })
    expect(wrapper.state().loading).toEqual(true)
  })

  it('BigDataTable data state does not change componentWillReceiveProps is fired with the same data', () => {
    const wrapper = mount(TestTable({ data: list }))

    expect(wrapper.state().rows).toEqual([{ name: 'Mike', description: 'Cool' }])
    wrapper.setProps({ data: [{ name: 'Mike', description: 'Cool' }] })
    expect(wrapper.state().rows).toEqual([{ name: 'Mike', description: 'Cool' }])
  })

  it('BigDataTable data state loads new data when componentWillReceiveProps is fired with more data', () => {
    const wrapper = mount(TestTable({ data: list }))

    expect(wrapper.state().rows).toEqual([{ name: 'Mike', description: 'Cool' }])
    wrapper.setProps({ data: [{ name: 'Mike2', description: 'Cool' }] })
    expect(wrapper.state().rows).toEqual([
      { name: 'Mike', description: 'Cool' },
      { name: 'Mike2', description: 'Cool' },
    ])
  })

  it('BigDataTable data state only loads new data when componentWillReceiveProps is fired with more data', () => {
    const wrapper = mount(TestTable({ data: list }))

    expect(wrapper.state().rows).toEqual([{ name: 'Mike', description: 'Cool' }])
    wrapper.setProps({ data: [{ name: 'Mike', description: 'Cool' }, { name: 'Mike2', description: 'Cool' }] })
    expect(wrapper.state().rows).toEqual([
      { name: 'Mike', description: 'Cool' },
      { name: 'Mike2', description: 'Cool' },
    ])
  })

  it('Table noRowsRenderer renders expected content', () => {
    const wrapper = mount(TestTable())
    const noRowsRenderer = wrapper.find('Table').prop('noRowsRenderer')()
    expect(noRowsRenderer).toEqual(<h1 className="no rows">No rows!</h1>)
  })

  it('Table rowClassName renders expected content', () => {
    const wrapper = mount(TestTable())

    const headerRowClassName = wrapper.find('Table').prop('rowClassName')({ index: -1 })
    expect(headerRowClassName).toEqual('header row center')

    const OddRowClassName = wrapper.find('Table').prop('rowClassName')({ index: 1 })
    expect(OddRowClassName).toEqual('odd row left')

    const EvenRowClassName = wrapper.find('Table').prop('rowClassName')({ index: 2 })
    expect(EvenRowClassName).toEqual('even row left')
  })

  it('Table rowGetter renders expected content', () => {
    const wrapper = mount(TestTable({ data: list }))
    const rowGetter = wrapper.find('Table').prop('rowGetter')({ index: 0 })
    expect(rowGetter).toEqual({ name: 'Mike', description: 'Cool' })
  })
})
