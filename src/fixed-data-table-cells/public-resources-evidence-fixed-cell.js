import React from 'react'
import PropTypes from 'prop-types'
import { Cell } from 'fixed-data-table-2'
import { get } from 'lodash'

import { RatingPopup, utils } from '../index'

const PublicEvidenceFixedCell = props => {
  const {
    data,
    rowIndex,
    columnKey,
    chromosomeKey,
    positionKey,
    referenceKey,
    alternateKey,
    cosmicKey,
    hgmdKey,
    clinvarKey,
    gnomadKey,
    ...rest
  } = props

  const rowData = data[rowIndex]

  const chromosome = get(rowData, chromosomeKey)
  const position = get(rowData, positionKey)
  const reference = get(rowData, referenceKey)
  const alternate = get(rowData, alternateKey)
  const cosmicId = get(rowData, cosmicKey)
  const hgmdId = get(rowData, hgmdKey)
  const clinvarId = get(rowData, clinvarKey)
  const gnomadFrequency = get(rowData, gnomadKey)

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
    <Cell {...rest}>
      <RatingPopup database="COSMIC" value={cosmicId} url={cosmicURL} />
      <RatingPopup database="HGMD" value={hgmdId} url={hgmdURL} />
      <RatingPopup database="ClinVar" value={clinvarId} url={clinvarURL} />
      <RatingPopup database="gnomAD" value={gnomadFrequency} url={gnomadURL} />
    </Cell>
  )
}

PublicEvidenceFixedCell.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  rowIndex: PropTypes.number,
  columnKey: PropTypes.string,
  chromosomeKey: PropTypes.string,
  positionKey: PropTypes.string,
  referenceKey: PropTypes.string,
  alternateKey: PropTypes.string,
  cosmicKey: PropTypes.string,
  hgmdKey: PropTypes.string,
  clinvarKey: PropTypes.string,
  gnomadKey: PropTypes.string,
}

PublicEvidenceFixedCell.defaultProps = {
  data: [],
}

export default PublicEvidenceFixedCell
