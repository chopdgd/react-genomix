import React from 'react'

import { ExternalLink } from '../links/external-link'
import * as urlBuilders from '../utils/urlBuilders'

export const HGVScDNACell = ({ cellData }) => {
  return <ExternalLink href={urlBuilders.alamutEntry(cellData)}>{cellData}</ExternalLink>
}

export default HGVScDNACell
