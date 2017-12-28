import React from 'react'
import PropTypes from 'prop-types'
import { Label } from 'semantic-ui-react'

import { utils, Link } from 'LibIndex'
import * as customPropTypes from 'LibSrc/helpers/customPropTypes'
import getElementType from 'LibSrc/helpers/getElementType'
import getUnhandledProps from 'LibSrc/helpers/getUnhandledProps'


class TranscriptCell extends React.PureComponent {
  render() {
    const ElementType = getElementType(TranscriptCell, this.props)
    const rest = getUnhandledProps(TranscriptCell, this.props)
    const { transcript } = this.props


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
