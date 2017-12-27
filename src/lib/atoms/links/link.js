import React from 'react'
import PropTypes from 'prop-types'

import * as customPropTypes from 'LibSrc/helpers/customPropTypes'
import getElementType from 'LibSrc/helpers/getElementType'
import getUnhandledProps from 'LibSrc/helpers/getUnhandledProps'


class Link extends React.PureComponent {
  render() {
    const ElementType = getElementType(Link, this.props)
    const rest = getUnhandledProps(Link, this.props)
    const { content } = this.props

    const additionalProps = {}
    if (ElementType === 'a') {
      additionalProps.target = '_blank'
      additionalProps.rel = 'noopener noreferrer'
    }

    return (
      <ElementType {...rest} {...additionalProps}>
        {content}
      </ElementType>
    )
  }
}


Link.propTypes = {
  as: customPropTypes.as,
  content: PropTypes.any,
}

Link.defaultProps = {
  as: 'a',
}

Link.handledProps = ['as', 'content']

export default Link
