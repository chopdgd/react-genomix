/* eslint react/forbid-foreign-prop-types: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import { Column } from 'react-virtualized'
import { get } from 'lodash'

import { CheckboxCell } from '../../index'


// See: https://github.com/bvaughn/react-virtualized/pull/748
// Note: Facebook argues against inheritance https://reactjs.org/docs/composition-vs-inheritance.html
// But Table won't accept anything other than type of Column
// Submitted an issue shown here: https://github.com/bvaughn/react-virtualized/issues/898

const cellDataGetter = (props) => {
  // See: https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md#celldatagetter
  // props: { columnData, dataKey, rowData }
  const { rowData, dataKey } = props
  return get(rowData, dataKey, 'N/A')
}

const cellRenderer = (props) => {
  // See: https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md#cellrenderer
  // props: { cellData, columnData, columnIndex, dataKey, isScrolling, rowData, rowIndex }
  const { columnData, rowIndex } = props
  const { onChange, checked } = columnData

  return (
    <CheckboxCell
      onChange={onChange}
      rowIndex={rowIndex}
      checked={checked}
    />
  )
}

const headerRenderer = (props) => {
  // See: https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md#headerrenderer
  // props: { columnData, dataKey, disableSort, label, sortBy, sortDirection, }
  const { label } = props
  return <p>{label}</p>
}


class CheckboxColumn extends Column {
  static propTypes = {
    ...Column.propTypes,
    cellDataGetter: PropTypes.func.isRequired,
    cellRenderer: PropTypes.func.isRequired,
    headerRenderer: PropTypes.func.isRequired,
    columnData: PropTypes.shape({
      onChange: PropTypes.func.isRequired,
      checked: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
    }).isRequired,
  }

  static defaultProps = {
    ...Column.defaultProps,
    cellDataGetter: cellDataGetter,
    cellRenderer: cellRenderer,
    headerRenderer: headerRenderer,
  }

  render() {
    return <Column {...this.props} />
  }
}


export default CheckboxColumn
