import React from 'react'
import PropTypes from 'prop-types'
import { Cell } from 'fixed-data-table-2'
import { get } from 'lodash'

import { TurnAroundTimeProgress } from '../../index'


const TurnAroundTimeProgressFixedCell = props => {
  const {
    data, rowIndex, columnKey,
    progressProps, targetKey, startKey, signoutKey, compact,
    ...rest
  } = props

  const rowData = data[rowIndex]
  const target = get(rowData, targetKey)
  const start = get(rowData, startKey)
  const signout = get(rowData, signoutKey)

  return (
    <Cell {...rest}>
      <TurnAroundTimeProgress
        target={target}
        start={start}
        signout={signout}
        compact={compact}
        {...progressProps}
      />
    </Cell>
  )
}


TurnAroundTimeProgressFixedCell.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  rowIndex: PropTypes.number,
  columnKey: PropTypes.string,
  targetKey: PropTypes.string,
  startKey: PropTypes.string,
  signoutKey: PropTypes.string,
  progressProps: PropTypes.object,
}

TurnAroundTimeProgressFixedCell.defaultProps = {
  data: [],
  progressProps: {
    size: 'tiny',
  },
}


export default TurnAroundTimeProgressFixedCell
