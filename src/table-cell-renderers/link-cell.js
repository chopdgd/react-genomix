import React from 'react'

import { ExternalLink } from '../links/external-link'

export const LinkCell = ({ cellData, rowData, column }) => {
  const { urlBuilder } = column
  return <ExternalLink href={urlBuilder(rowData)}>{cellData}</ExternalLink>
}

export default LinkCell
