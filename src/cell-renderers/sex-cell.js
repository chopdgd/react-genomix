import React from 'react'
import { Icon } from 'semantic-ui-react'
import { get, toLower } from 'lodash'

export const SexCell = ({ cellData, column }) => {
  const value = toLower(cellData)
  const iconProps = get(column, 'props', {})

  let props = {}
  if (['male', 'm'].includes(value)) props = { color: 'blue', name: 'male' }
  else if (['female', 'f'].includes(value)) props = { color: 'pink', name: 'female' }
  else props = { color: 'black', name: 'question circle outline' }
  return <Icon {...props} {...iconProps} />
}

export default SexCell
