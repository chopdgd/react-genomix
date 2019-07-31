import React from 'react'

import { ExternalLink, utils } from '../../src/index'

export const HGVScDNACell = ({ cellData }) => {
  return <ExternalLink href={utils.urlBuilders.alamutEntry(cellData)}>{cellData}</ExternalLink>
}

export default HGVScDNACell
