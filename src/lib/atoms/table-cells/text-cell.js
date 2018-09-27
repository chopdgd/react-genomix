import React from 'react'
import PropTypes from 'prop-types'

import * as customPropTypes from '../../helpers/customPropTypes'
import getElementType from '../../helpers/getElementType'
import getUnhandledProps from '../../helpers/getUnhandledProps'


const TextCell = props => {
  const ElementType = getElementType(TextCell, props)
  const rest = getUnhandledProps(TextCell, props)
  const { content } = props

  return (
    <ElementType {...rest}>
      {content}
    </ElementType>
  )
}


TextCell.propTypes = {
  as: customPropTypes.as,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]).isRequired,
  rowIndex: PropTypes.number,
}

TextCell.defaultProps = {
  as: 'div'
}

TextCell.handledProps = [
  'as',
  'content',
  'rowIndex',
]


export default TextCell
