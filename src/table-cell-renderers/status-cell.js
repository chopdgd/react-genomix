import React from 'react'
import { Label } from 'semantic-ui-react'
import { get, toLower } from 'lodash'

export const StatusCell = ({ cellData, column }) => {
  const labelProps = get(column, 'props', {})
  const value = toLower(cellData)

  let props = {}
  if (value.includes('run')) props = { icon: 'hourglass start', color: 'blue' }
  else if (value.includes('pend')) props = { icon: 'clock outline', color: 'yellow' }
  else if (value.includes('complete')) props = { icon: 'checkmark', color: 'green' }
  else if (value.includes('fail')) props = { icon: 'x', color: 'red' }

  return <Label content={cellData} {...props} {...labelProps} />
}

export default StatusCell
