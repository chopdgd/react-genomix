import React from 'react'
import { Icon } from 'semantic-ui-react'
import { get, toLower } from 'lodash'

export const BooleanCell = ({ cellData, column }) => {
  const value = toLower(cellData)
  const iconProps = get(column, 'props', {})

  let props = {}
  if (['yes', 'y', 'true', 't', '1'].includes(value)) props = { color: 'green', name: 'checkmark' }
  else if (['no', 'n', 'false', 'f', '0'].includes(value)) props = { color: 'red', name: 'x' }
  else props = { color: 'black', name: 'question circle outline' }

  return <Icon {...props} {...iconProps} />
}

export default BooleanCell
