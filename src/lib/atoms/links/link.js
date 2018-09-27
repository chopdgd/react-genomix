import React from 'react'
import PropTypes from 'prop-types'

import * as customPropTypes from '../../helpers/customPropTypes'
import getElementType from '../../helpers/getElementType'
import getUnhandledProps from '../../helpers/getUnhandledProps'


const Link = props => {
  const ElementType = getElementType(Link, props)
  const rest = getUnhandledProps(Link, props)
  const { content } = props

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


Link.propTypes = {
  as: customPropTypes.as,
  content: PropTypes.any,
}

Link.defaultProps = {
  as: 'a',
}

Link.handledProps = ['as', 'content']


export default Link
