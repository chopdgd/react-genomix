import React from 'react'
import PropTypes from 'prop-types'
import { Cell } from 'fixed-data-table-2'
import { get } from 'lodash'

import { TurnAroundTimeProgress } from 'LibIndex'


class TurnAroundTimeProgressFixedCell extends React.PureComponent {
  render() {
    const {
      data, rowIndex, columnKey,
      progressProps, targetKey, startKey, signoutKey,
      ...rest
    } = this.props
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
          {...progressProps}
        />
      </Cell>
    )
  }
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
