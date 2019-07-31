import React from 'react'
import { Label } from 'semantic-ui-react'
import { get } from 'lodash'

import { getInterpretationColor } from '../utils'

export const InterpretationCell = ({ cellData, column }) => {
  const labelProps = get(column, 'props')
  const color = getInterpretationColor(cellData)
  return <Label color={color} content={cellData} {...labelProps} />
}

export default InterpretationCell
