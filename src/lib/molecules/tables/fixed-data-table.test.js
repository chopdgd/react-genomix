import React from 'react'
import ReactDOM from 'react-dom'
import { Cell, Column } from 'fixed-data-table-2'
import { shallow } from 'enzyme'

import { FixedDataTable, TextFixedCell } from 'LibIndex'


const list = Array.from(new Array(1), (x,i) => ({
  name: 'Mike',
  text: 'text',
}))

const initialColumnOrder = [ 'name', 'text' ]
const nextColumnOrder = [ 'text', 'name' ]

const initialColumnSizes = { name: 50, text: 100 }
const nextColumnSizes = { name: 150, text: 200 }

const TestTable = ({ ...props }) => {
  return (
    <FixedDataTable
      data={props.data}
      maxHeight={500}
      headerHeight={100}
      rowHeight={100}
      columnOrder={initialColumnOrder}
      columnWidths={initialColumnSizes}
      onColumnResize={props.onColumnResize}
      onColumnReorder={props.onColumnReorder}
      fixedColumns={props.fixedColumns}
    >
      <Column
        header={<Cell>Header</Cell>}
        cell={<TextFixedCell data={props.data} />}
        columnKey="name"
        width={100}
      />
      <Column
        header={<Cell>Header</Cell>}
        cell={<TextFixedCell data={props.data} />}
        columnKey="text"
        width={100}
      />
    </FixedDataTable>
  )
}


describe('Test BigDataTable', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(TestTable({ data: list }), div)
  })

  it('renders Dimmer', () => {
    const wrapper = shallow(TestTable({ data: list }))
    expect(wrapper.find('Dimmer')).toHaveLength(1)
  })

  it('renders Loader', () => {
    const wrapper = shallow(TestTable({ data: list }))
    expect(wrapper.find('Loader')).toHaveLength(1)
  })

  it('renders Dimmable', () => {
    const wrapper = shallow(TestTable({ data: list }))
    expect(wrapper.find('DimmerDimmable')).toHaveLength(1)
  })

  it('renders AutoSizer', () => {
    const wrapper = shallow(TestTable({ data: list }))
    expect(wrapper.find('AutoSizer')).toHaveLength(1)
  })

  it('columnOrder should change when given new props', () => {
    const wrapper = shallow(TestTable({ data: list }))

    expect(wrapper.instance().state.columnOrder).toEqual(initialColumnOrder)
    wrapper.setProps({ columnOrder: nextColumnOrder })
    expect(wrapper.instance().state.columnOrder).toEqual(nextColumnOrder)
  })

  it('columnWidths should change when given new props', () => {
    const wrapper = shallow(TestTable({ data: list }))

    expect(wrapper.instance().state.columnWidths).toEqual(initialColumnSizes)
    wrapper.setProps({ columnWidths: nextColumnSizes })
    expect(wrapper.instance().state.columnWidths).toEqual(nextColumnSizes)
  })

  it('loading should change when given new props', () => {
    const wrapper = shallow(TestTable({ data: list }))

    expect(wrapper.instance().state.loading).toEqual(false)
    wrapper.setProps({ loading: true })
    expect(wrapper.instance().state.loading).toEqual(true)
  })

  it('fixedColumns should change when given new props', () => {
    const wrapper = shallow(TestTable({ data: list }))

    expect(wrapper.instance().state.fixedColumns).toEqual([])
    wrapper.setProps({ fixedColumns: ['name'] })
    expect(wrapper.instance().state.fixedColumns).toEqual(['name'])
  })

  it('rows should change when given new props', () => {
    const wrapper = shallow(TestTable({ data: list }))

    expect(wrapper.instance().state.rows).toEqual(list)
    wrapper.setProps({ data: [{ name: 'Mike', text: 'Cool' }] })
    expect(wrapper.instance().state.rows).toEqual([
      { name: 'Mike', text: 'text' },
      { name: 'Mike', text: 'Cool' },
    ])
  })

  it('rows should not change when given same props', () => {
    const wrapper = shallow(TestTable({ data: list }))

    expect(wrapper.instance().state.rows).toEqual(list)
    wrapper.setProps({ data: [{ name: 'Mike', text: 'text' }] })
    expect(wrapper.instance().state.rows).toEqual([
      { name: 'Mike', text: 'text' },
    ])
  })

  it('rows should not contain duplicates', () => {
    const wrapper = shallow(TestTable({ data: list }))

    expect(wrapper.instance().state.rows).toEqual(list)
    wrapper.setProps({ data: [{ name: 'Mike', text: 'Cool' }] })
    expect(wrapper.instance().state.rows).toEqual([
      { name: 'Mike', text: 'text' },
      { name: 'Mike', text: 'Cool' },
    ])
    wrapper.setProps({ data: [{ name: 'Mike', text: 'Cool' }] })
    expect(wrapper.instance().state.rows).toEqual([
      { name: 'Mike', text: 'text' },
      { name: 'Mike', text: 'Cool' },
    ])
  })

  it('columnWidths should change when onColumnResizeEndCallback is fired', () => {
    const onColumnResize = jest.fn()
    const wrapper = shallow(TestTable({ data: list, onColumnResize }))
    const instance = wrapper.instance()
    expect(instance.state.columnWidths).toEqual({name: 50, text: 100})
    instance.onColumnResizeEndCallback(10, 'name')
    expect(instance.state.columnWidths).toEqual({name: 10, text: 100})
    expect(onColumnResize).toHaveBeenCalledTimes(1)
  })

  it('columnOrder should change when onColumnReorderEndCallback is fired', () => {
    const onColumnReorder = jest.fn()
    const wrapper = shallow(TestTable({ data: list, onColumnReorder }))
    const instance = wrapper.instance()
    expect(instance.state.columnOrder).toEqual(initialColumnOrder)
    instance.onColumnReorderEndCallback({ reorderColumn: 'name' })
    expect(instance.state.columnOrder).toEqual(nextColumnOrder)
    expect(onColumnReorder).toHaveBeenCalledTimes(1)
  })

  it('columnOrder should not change when onColumnReorderEndCallback is fired with columnAfter', () => {
    const wrapper = shallow(TestTable({ data: list }))
    const instance = wrapper.instance()
    expect(instance.state.columnOrder).toEqual(initialColumnOrder)
    instance.onColumnReorderEndCallback({ reorderColumn: 'name',  columnAfter: 'text' })
    expect(instance.state.columnOrder).toEqual(initialColumnOrder)
  })

  it('onColumnResize is not fired since it is undefined', () => {
    const wrapper = shallow(TestTable({ data: list }))
    const instance = wrapper.instance()
    expect(instance.state.columnWidths).toEqual({name: 50, text: 100})
    instance.onColumnResizeEndCallback(10, 'name')
    expect(instance.state.columnWidths).toEqual({name: 10, text: 100})
  })
})
