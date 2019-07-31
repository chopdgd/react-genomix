import React from 'react'
import { Label, Popup } from 'semantic-ui-react'
import { get } from 'lodash'

import { ExternalLink } from '../links/external-link'
import * as urlBuilders from '../utils/urlBuilders'

export const LocusCell = ({ rowData, column }) => {
  const props = get(column, 'props')
  const chromosome = get(rowData, 'chromosome')
  const start = parseInt(get(rowData, 'start'), 10).toLocaleString()
  const end = parseInt(get(rowData, 'end'), 10).toLocaleString()
  const trigger = `${chromosome}:${start}-${end}`

  return (
    <Popup trigger={<p style={{ cursor: 'pointer' }}>{trigger}</p>} on="click" wide="very" {...props}>
      <Popup.Content>
        <ExternalLink href={urlBuilders.ucscLocus(chromosome, start, end)} style={{ paddingRight: 5 }}>
          <Label content="UCSC" color="yellow" />
        </ExternalLink>
        <ExternalLink href={urlBuilders.dgvRegionSearch(chromosome, start, end)} style={{ paddingRight: 5 }}>
          <Label content="DGV" color="teal" />
        </ExternalLink>
        <ExternalLink href={urlBuilders.decipherRegionSearch(chromosome, start, end)} style={{ paddingRight: 5 }}>
          <Label content="Decipher" color="blue" />
        </ExternalLink>
      </Popup.Content>
    </Popup>
  )
}

export default LocusCell
