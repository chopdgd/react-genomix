import React from 'react'
import PropTypes from 'prop-types'
import { Cell } from 'fixed-data-table-2'
import { Button, Popup, Icon } from 'semantic-ui-react'
import { get } from 'lodash'

import { utils } from 'LibIndex'


class PublicEvidenceFixedCell extends React.PureComponent {
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
    const {
      data, rowIndex, columnKey,
      chromosomeKey, positionKey, referenceKey, alternateKey,
      cosmicKey, hgmdKey, clinvarKey, gnomadKey,
      ...rest
    } = this.props
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
        {this.renderRating('COSMIC', cosmicId, cosmicURL)}
        {this.renderRating('HGMD', hgmdId, hgmdURL)}
        {this.renderRating('ClinVar', clinvarId, clinvarURL)}
        {this.renderRating('gnomAD', gnomadFrequency, gnomadURL)}
      </Cell>
    )
  }
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
