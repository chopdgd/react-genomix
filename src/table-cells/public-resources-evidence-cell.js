import React from 'react'
import PropTypes from 'prop-types'

import { RatingPopup, utils } from '../index'
import * as customPropTypes from '../helpers/customPropTypes'
import getElementType from '../helpers/getElementType'
import getUnhandledProps from '../helpers/getUnhandledProps'

const PublicEvidenceCell = props => {
  const ElementType = getElementType(PublicEvidenceCell, props)
  const rest = getUnhandledProps(PublicEvidenceCell, props)
  const { chromosome, position, reference, alternate } = props
  const { cosmicId, hgmdId, clinvarId, gnomadFrequency } = props

  let cosmicURL
  if (cosmicId) {
    cosmicURL = utils.urlBuilders.cosmicEntry(cosmicId)
  }

  let hgmdURL
  if (hgmdId) {
    hgmdURL = utils.urlBuilders.hgmdVariant(hgmdId)
  }

  let clinvarURL
  if (clinvarId) {
    clinvarURL = utils.urlBuilders.clinvarEntry(clinvarId)
  }

  let gnomadURL
  if (gnomadFrequency) {
    gnomadURL = utils.urlBuilders.gnomadVariant(chromosome, position, reference, alternate)
  }

  return (
    <ElementType {...rest}>
      <RatingPopup database="COSMIC" value={cosmicId} url={cosmicURL} />
      <RatingPopup database="HGMD" value={hgmdId} url={hgmdURL} />
      <RatingPopup database="ClinVar" value={clinvarId} url={clinvarURL} />
      <RatingPopup database="gnomAD" value={gnomadFrequency} url={gnomadURL} />
    </ElementType>
  )
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

PublicEvidenceCell.handledProps = [
  'as',
  'chromosome',
  'position',
  'reference',
  'alternate',
  'cosmicId',
  'hgmdId',
  'clinvarId',
  'gnomadFrequency',
  'rowIndex',
]

export default PublicEvidenceCell
