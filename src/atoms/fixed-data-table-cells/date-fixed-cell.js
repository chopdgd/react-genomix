import React from 'react'
import PropTypes from 'prop-types'
import { Cell } from 'fixed-data-table-2'
import { get } from 'lodash'

import { utils } from '../../index'


const DateFixedCell = props => {
  const { data, rowIndex, columnKey, ...rest } = props
  const date = get(data[rowIndex], columnKey)

  return (
    <Cell {...rest}>
      {utils.dateFormatter(date)}
    </Cell>
  )
}


DateFixedCell.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  rowIndex: PropTypes.number,
  columnKey: PropTypes.string,
}

DateFixedCell.defaultProps = {
  data: [],
}


export default DateFixedCell
