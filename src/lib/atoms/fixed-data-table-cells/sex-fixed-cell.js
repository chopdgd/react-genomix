import React from 'react'
import PropTypes from 'prop-types'
import { Cell } from 'fixed-data-table-2'
import { get, toLower, toString } from 'lodash'

import { MaleIcon, FemaleIcon, QuestionIcon } from 'LibIndex'


class SexFixedCell extends React.PureComponent {
  render() {
    const { data, rowIndex, columnKey, ...rest } = this.props
    const sex = get(data[rowIndex], columnKey)
    const normalizedSex = toLower(toString(sex))

    let icon = <QuestionIcon />
    if (['m', 'male', '1'].includes(normalizedSex)) {
      icon = <MaleIcon />
    } else if (['f', 'female', '2'].includes(normalizedSex)) {
      icon = <FemaleIcon />
    }

    return (
      <Cell {...rest}>
        {icon}
      </Cell>
    )
  }
}


SexFixedCell.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  rowIndex: PropTypes.number,
  columnKey: PropTypes.string,
}

SexFixedCell.defaultProps = {
  data: [],
}

export default SexFixedCell
