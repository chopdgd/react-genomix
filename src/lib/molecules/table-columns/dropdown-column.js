/* eslint react/forbid-foreign-prop-types: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import { Column } from 'react-virtualized'
import { get } from 'lodash'

import { DropdownCell } from '../../index'


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
  const { cellData, columnData, dataKey, rowIndex } = props

  return (
    <DropdownCell
      name={dataKey}
      content={cellData}
      rowIndex={rowIndex}
      {...columnData}
    />
  )
}

const headerRenderer = (props) => {
  // See: https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md#headerrenderer
  // props: { columnData, dataKey, disableSort, label, sortBy, sortDirection, }
  const { label } = props
  return <p>{label}</p>
}


class DropdownColumn extends Column {
  static propTypes = {
    ...Column.propTypes,
    className: PropTypes.string,
    cellDataGetter: PropTypes.func.isRequired,
    cellRenderer: PropTypes.func.isRequired,
    headerRenderer: PropTypes.func.isRequired,
    columnData: PropTypes.shape({
      onChange: PropTypes.func.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
          ]).isRequired,
          value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
          ]).isRequired,
          text: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
          ]).isRequired,
          content: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.element,
          ]),
        }),
      ).isRequired,
      dropDownProps: PropTypes.object,
    }).isRequired,
  }

  static defaultProps = {
    ...Column.defaultProps,
    className: 'dropdown col',
    cellDataGetter: cellDataGetter,
    cellRenderer: cellRenderer,
    headerRenderer: headerRenderer,
    columnData: {
      dropDownProps: {
        fluid: false,
        multiple: false,
        selection: true,
        search: true,
      }
    },
  }

  render() {
    return <Column {...this.props} />
  }
}


export default DropdownColumn
