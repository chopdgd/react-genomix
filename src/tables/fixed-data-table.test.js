import React from 'react'
import ReactDOM from 'react-dom'
import { Cell, Column } from 'fixed-data-table-2'
import { shallow } from 'enzyme'

import { FixedDataTable, TextFixedCell } from '../index'

const list = Array.from(new Array(1), (x, i) => ({
  name: 'Mike',
  text: 'text',
}))

const initialColumnOrder = ['name', 'text']
const nextColumnOrder = ['text', 'name']

const initialColumnSizes = { name: 50, text: 100 }
const nextColumnSizes = { name: 150, text: 200 }

const TestTable = ({ ...props }) => {
  return (
    <FixedDataTable
      rowsCount={props.data.length}
      maxHeight={500}
      headerHeight={100}
      rowHeight={100}
      columnOrder={initialColumnOrder}
      onColumnReorder={props.onColumnReorder}
      columnWidths={initialColumnSizes}
      onColumnResize={props.onColumnResize}
      fixedColumns={props.fixedColumns}
    >
      <Column header={<Cell>Header</Cell>} cell={<TextFixedCell data={props.data} />} columnKey="name" width={100} />
      <Column header={<Cell>Header</Cell>} cell={<TextFixedCell data={props.data} />} columnKey="text" width={100} />
    </FixedDataTable>
  )
}

describe('Test BigDataTable', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(TestTable({ data: list }), div)
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

  it('columnWidths should change when onColumnResizeEndCallback is fired', () => {
    const onColumnResize = jest.fn()
    const wrapper = shallow(TestTable({ data: list, onColumnResize }))
    const instance = wrapper.instance()
    const setStateSpy = jest.spyOn(instance, 'setState')

    expect(wrapper.state().columnWidths).toEqual({ name: 50, text: 100 })
    instance.onColumnResizeEndCallback(10, 'name')
    expect(setStateSpy).toHaveBeenCalledWith({ columnWidths: { name: 10, text: 100 } })
    expect(onColumnResize).toHaveBeenCalledTimes(1)
  })

  it('columnOrder should change when onColumnReorderEndCallback is fired', () => {
    const onColumnReorder = jest.fn()
    const wrapper = shallow(TestTable({ data: list, onColumnReorder }))
    const instance = wrapper.instance()
    const setStateSpy = jest.spyOn(instance, 'setState')

    instance.onColumnReorderEndCallback({ reorderColumn: 'name' })
    expect(setStateSpy).toHaveBeenCalledWith({ columnOrder: ['text', 'name'] })
    instance.onColumnReorderEndCallback({ reorderColumn: 'text' })
    expect(setStateSpy).toHaveBeenCalledWith({ columnOrder: ['text', 'name'] })
    expect(onColumnReorder).toHaveBeenCalledTimes(2)
  })

  it('columnOrder should not change when onColumnReorderEndCallback is fired with columnAfter', () => {
    const wrapper = shallow(TestTable({ data: list }))
    const instance = wrapper.instance()
    const setStateSpy = jest.spyOn(instance, 'setState')

    expect(wrapper.state().columnOrder).toEqual(initialColumnOrder)
    instance.onColumnReorderEndCallback({ reorderColumn: 'name', columnAfter: 'text' })
    expect(setStateSpy).toHaveBeenCalledWith({ columnOrder: initialColumnOrder })
  })
})
