import React from 'react'
import { Label } from 'semantic-ui-react'
import { get } from 'lodash'

import { getClassificationColor } from '../utils'

export const ClassificationCell = ({ cellData, column }) => {
  const labelProps = get(column, 'props')
  const color = getClassificationColor(cellData)
  return <Label color={color} content={cellData} {...labelProps} />
}

export default ClassificationCell
