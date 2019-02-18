import React from 'react'
import PropTypes from 'prop-types'
import { Cell } from 'fixed-data-table-2'
import { get } from 'lodash'

const TextFixedCell = props => {
  const { data, rowIndex, columnKey, ...rest } = props
  const text = get(data[rowIndex], columnKey)

  return <Cell {...rest}>{text}</Cell>
}

TextFixedCell.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  rowIndex: PropTypes.number,
  columnKey: PropTypes.string,
}

TextFixedCell.defaultProps = {
  data: [],
}

export default TextFixedCell
