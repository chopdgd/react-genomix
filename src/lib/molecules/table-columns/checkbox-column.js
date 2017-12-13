import React from 'react'
import PropTypes from 'prop-types'
import { Column } from 'react-virtualized'
import { get } from 'lodash'

import { CheckboxCell } from 'LibIndex'


// See: https://github.com/bvaughn/react-virtualized/pull/748
// Note: Facebook argues against inheritance https://reactjs.org/docs/composition-vs-inheritance.html
// But Table won't accept anything other than type of Column
// Submitted an issue shown here: https://github.com/bvaughn/react-virtualized/issues/898


class CheckboxColumn extends Column {
  static propTypes = {
    ...Column.propTypes,
    onChange: PropTypes.func.isRequired,
  }

  static defaultProps = {
    ...Column.defaultProps,
  }

  cellDataGetter = (props) => {
    // See: https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md#celldatagetter
    // props: { columnData, dataKey, rowData }
    const { rowData, dataKey } = props
    return get(rowData, dataKey, 'N/A')
  }

  cellRenderer = (props) => {
    // See: https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md#cellrenderer
    // props: { cellData, columnData, columnIndex, dataKey, isScrolling, rowData, rowIndex }
    const { cellData, rowIndex } = props
    const { onChange } = this.props

    return (
      <CheckboxCell
        onChange={onChange}
        content={cellData}
        rowIndex={rowIndex}
      />
    )
  }

  headerRenderer = (props) => {
    // See: https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md#headerrenderer
    // props: { columnData, dataKey, disableSort, label, sortBy, sortDirection, }
    const { label } = props
    return <p>{label}</p>
  }

  render() {
    const { label, dataKey, width } = this.props

    return (
      <Column
        label={label}
        dataKey={dataKey}
        width={width}
        cellDataGetter={this.cellDataGetter}
        cellRenderer={this.cellRenderer}
        headerRenderer={this.headerRenderer}
      />
    )
  }
}


export default CheckboxColumn
