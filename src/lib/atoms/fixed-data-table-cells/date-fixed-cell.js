import React from 'react'
import PropTypes from 'prop-types'
import { Cell } from 'fixed-data-table-2'
import { get } from 'lodash'

import { utils } from 'LibIndex'


class DateFixedCell extends React.PureComponent {
  render() {
    const { data, rowIndex, columnKey, ...rest } = this.props
    const date = get(data[rowIndex], columnKey)

    return (
      <Cell {...rest}>
        {utils.dateFormatter(date)}
      </Cell>
    )
  }
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
