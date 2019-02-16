import React from 'react'
import PropTypes from 'prop-types'
import { Label } from 'semantic-ui-react'

import { utils, Link } from '../index'
import * as customPropTypes from '../helpers/customPropTypes'
import getElementType from '../helpers/getElementType'
import getUnhandledProps from '../helpers/getUnhandledProps'


const TranscriptCell = props => {
  const ElementType = getElementType(TranscriptCell, props)
  const rest = getUnhandledProps(TranscriptCell, props)
  const { transcript } = props


  return (
    <ElementType {...rest}>
      {transcript} &nbsp;&nbsp;
      <Link
        content={<Label basic size="tiny" content="A" color="brown" />}
        href={utils.urlBuilders.alamutEntry(transcript)}
      />
    </ElementType>
  )
}


TranscriptCell.propTypes = {
  as: customPropTypes.as,
  transcript: PropTypes.string.isRequired,
  rowIndex: PropTypes.number,
}

TranscriptCell.defaultProps = {
  as: 'div',
}

TranscriptCell.handledProps = [
  'as',
  'transcript',
  'rowIndex',
]


export default TranscriptCell
