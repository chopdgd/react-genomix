/* eslint react/forbid-foreign-prop-types: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import { Column } from 'react-virtualized'
import { get } from 'lodash'

import { PublicEvidenceCell } from '../index'

// See: https://github.com/bvaughn/react-virtualized/pull/748
// Note: Facebook argues against inheritance https://reactjs.org/docs/composition-vs-inheritance.html
// But Table won't accept anything other than type of Column
// Submitted an issue shown here: https://github.com/bvaughn/react-virtualized/issues/898

const cellDataGetter = props => {
  // See: https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md#celldatagetter
  // props: { columnData, dataKey, rowData }
  const { rowData, dataKey } = props
  return get(rowData, dataKey, 'N/A')
}

const cellRenderer = props => {
  // See: https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md#cellrenderer
  // props: { cellData, columnData, columnIndex, dataKey, isScrolling, rowData, rowIndex }
  const { columnData, rowData, rowIndex } = props
  const { chromosomeKey, positionKey, referenceKey, alternateKey } = columnData
  const { cosmicKey, hgmdKey, clinvarKey, gnomadKey } = columnData

  const chromosome = get(rowData, chromosomeKey)
  const position = get(rowData, positionKey)
  const reference = get(rowData, referenceKey)
  const alternate = get(rowData, alternateKey)
  const cosmicId = get(rowData, cosmicKey)
  const hgmdId = get(rowData, hgmdKey)
  const clinvarId = get(rowData, clinvarKey)
  const gnomadFrequency = get(rowData, gnomadKey)

  return (
    <PublicEvidenceCell
      chromosome={chromosome}
      position={position}
      reference={reference}
      alternate={alternate}
      cosmicId={cosmicId}
      hgmdId={hgmdId}
      clinvarId={clinvarId}
      gnomadFrequency={gnomadFrequency}
      rowIndex={rowIndex}
    />
  )
}

const headerRenderer = props => {
  // See: https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md#headerrenderer
  // props: { columnData, dataKey, disableSort, label, sortBy, sortDirection, }
  const { label } = props
  return <p>{label}</p>
}

class PublicEvidenceColumn extends Column {
  static propTypes = {
    ...Column.propTypes,
    cellDataGetter: PropTypes.func.isRequired,
    cellRenderer: PropTypes.func.isRequired,
    headerRenderer: PropTypes.func.isRequired,
    columnData: PropTypes.shape({
      chromosomeKey: PropTypes.string.isRequired,
      positionKey: PropTypes.string.isRequired,
      referenceKey: PropTypes.string.isRequired,
      alternateKey: PropTypes.string.isRequired,
      cosmicKey: PropTypes.string,
      hgmdKey: PropTypes.string,
      clinvarKey: PropTypes.string,
      gnomadKey: PropTypes.string,
    }).isRequired,
  }

  static defaultProps = {
    ...Column.defaultProps,
    cellDataGetter: cellDataGetter,
    cellRenderer: cellRenderer,
    headerRenderer: headerRenderer,
    columnData: {},
  }

  render() {
    return <Column {...this.props} />
  }
}

export default PublicEvidenceColumn
