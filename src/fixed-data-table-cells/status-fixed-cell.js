import React from 'react'
import PropTypes from 'prop-types'
import { Cell } from 'fixed-data-table-2'
import { Icon } from 'semantic-ui-react'
import { get } from 'lodash'


const StatusFixedCell = props => {
  const { data, rowIndex, columnKey, ...rest } = props
  const status = get(data[rowIndex], columnKey)

  let icon
  switch (status) {
    case 'pending':
      icon = <Icon color="grey" name="clock" />
      break
    case 'running':
      icon = <Icon className="genomix" color="black" name="spinner" />
      break
    case 'complete':
      icon = <Icon color="green" name="checkmark" />
      break
    case 'cancelled':
      icon = <Icon color="red" name="dont" />
      break
    case 'failed':
      icon = <Icon color="red" name="x" />
      break
    default:
      icon = <Icon color="grey" name="question" />
      break
  }

  return (
    <Cell {...rest}>
      {icon}
    </Cell>
  )
}


StatusFixedCell.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  rowIndex: PropTypes.number,
  columnKey: PropTypes.string,
}

StatusFixedCell.defaultProps = {
  data: [],
}


export default StatusFixedCell
