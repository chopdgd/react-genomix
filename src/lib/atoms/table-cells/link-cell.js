import React from 'react'
import PropTypes from 'prop-types'

import { Link } from '../../index'
import * as customPropTypes from '../../helpers/customPropTypes'
import getElementType from '../../helpers/getElementType'
import getUnhandledProps from '../../helpers/getUnhandledProps'


const LinkCell = props => {
  const { as, linkAs, content } = props

  const ElementType = getElementType(LinkCell, { as })
  const rest = getUnhandledProps(LinkCell, props)

  return (
    <ElementType {...rest}>
      <Link {...rest} as={linkAs} content={content} />
    </ElementType>
  )
}


LinkCell.propTypes = {
  as: customPropTypes.as,
  rowIndex: PropTypes.number,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]).isRequired,
  linkAs: customPropTypes.as,
}

LinkCell.defaultProps = {
  as: 'div',
  linkAs: 'a',
}

LinkCell.handledProps = [
  'as',
  'rowIndex',
  'content',
  'linkAs',
]


export default LinkCell
