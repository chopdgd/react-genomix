import React from 'react'
import PropTypes from 'prop-types'

import * as customPropTypes from 'LibSrc/helpers/customPropTypes'
import getElementType from 'LibSrc/helpers/getElementType'
import getUnhandledProps from 'LibSrc/helpers/getUnhandledProps'


class TextCell extends React.PureComponent {
  render() {
    const ElementType = getElementType(TextCell, this.props)
    const rest = getUnhandledProps(TextCell, this.props)
    const { content } = this.props

    return (
      <ElementType {...rest}>
        {content}
      </ElementType>
    )
  }
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
