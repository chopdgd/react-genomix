import React from 'react'
import PropTypes from 'prop-types'
import { Button, Popup, Icon } from 'semantic-ui-react'

import * as customPropTypes from '../../helpers/customPropTypes'
import * as urls from '../../utils/urlBuilders'
import getElementType from '../../helpers/getElementType'
import getUnhandledProps from '../../helpers/getUnhandledProps'


class PublicEvidenceCell extends React.PureComponent {
  renderRating = (database, value, url) => {
    let color = 'grey'
    let message = `Not present in ${database}!`
    let content = <p>{message}</p>

    if (value) {
      color = 'yellow'
      message = `Present in ${database}!`
      content = (
        <div>
          <p>{message}</p>
          <a target="_blank" rel="noopener noreferrer" href={url}>
            <Button fluid content={`Go to ${database}`} />
          </a>
        </div>
      )
    }

    return (
      <Popup
        trigger={<Icon color={color} name="star" />}
        content={content}
        hoverable
      />
    )
  }

  render() {
    const ElementType = getElementType(PublicEvidenceCell, this.props)
    const rest = getUnhandledProps(PublicEvidenceCell, this.props)
    const { chromosome, position, reference, alternate } = this.props
    const { cosmicId, hgmdId, clinvarId, gnomadFrequency } = this.props

    let cosmicURL
    if (cosmicId) {
      cosmicURL = urls.cosmicEntry(cosmicId)
    }

    let hgmdURL
    if (hgmdId) {
      hgmdURL = urls.hgmdVariant(hgmdId)
    }

    let clinvarURL
    if (clinvarId) {
      clinvarURL = urls.clinvarEntry(clinvarId)
    }

    let gnomadURL
    if (gnomadFrequency) {
      gnomadURL = urls.gnomadVariant(chromosome, position, reference, alternate)
    }

    return (
      <ElementType {...rest}>
        {this.renderRating('COSMIC', cosmicId, cosmicURL)}
        {this.renderRating('HGMD', hgmdId, hgmdURL)}
        {this.renderRating('ClinVar', clinvarId, clinvarURL)}
        {this.renderRating('gnomAD', gnomadFrequency, gnomadURL)}
      </ElementType>
    )
  }
}


PublicEvidenceCell.propTypes = {
  as: customPropTypes.as,
  chromosome: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  reference: PropTypes.string.isRequired,
  alternate: PropTypes.string.isRequired,
  cosmicId: PropTypes.string,
  hgmdId: PropTypes.string,
  clinvarId: PropTypes.string,
  gnomadFrequency: PropTypes.number,
  rowIndex: PropTypes.number,
}

PublicEvidenceCell.defaultProps = {
  as: 'div',
}

export default PublicEvidenceCell
