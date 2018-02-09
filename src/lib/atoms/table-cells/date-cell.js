import React from 'react'
import PropTypes from 'prop-types'

import { utils } from 'LibIndex'
import * as customPropTypes from 'LibSrc/helpers/customPropTypes'
import getElementType from 'LibSrc/helpers/getElementType'
import getUnhandledProps from 'LibSrc/helpers/getUnhandledProps'


const DateCell = props => {
  const ElementType = getElementType(DateCell, props)
  const rest = getUnhandledProps(DateCell, props)
  const { date, format } = props
  const normalizedDate = utils.dateFormatter(date, format)

  return (
    <ElementType {...rest}>
      {normalizedDate}
    </ElementType>
  )
}


DateCell.propTypes = {
  as: customPropTypes.as,
  date: PropTypes.string.isRequired,
  format: PropTypes.string,
  rowIndex: PropTypes.number,
}

DateCell.defaultProps = {
  as: 'div'
}

DateCell.handledProps = [
  'as',
  'date',
  'format',
  'rowIndex',
]


export default DateCell
