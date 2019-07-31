import React from 'react'
import { Label } from 'semantic-ui-react'
import { get } from 'lodash'

import { getMolecularConsequenceColor } from '../../src/utils'

export const ConsequenceCell = ({ cellData, column }) => {
  const labelProps = get(column, 'props')
  const color = getMolecularConsequenceColor(cellData)
  return <Label color={color} content={cellData} {...labelProps} />
}

export default ConsequenceCell
