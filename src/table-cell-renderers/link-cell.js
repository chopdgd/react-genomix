import React from 'react'
import { get } from 'lodash'

import { ExternalLink } from '../../src/index'

export const LinkCell = ({ cellData, column }) => {
  const urlBuilder = get(column, 'urlBuilder', () => cellData)
  return <ExternalLink href={urlBuilder(cellData)}>{cellData}</ExternalLink>
}

export default LinkCell
