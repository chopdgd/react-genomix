import React from 'react'
import { get } from 'lodash'

import { TurnAroundTimeProgress } from '../progress-bars/turn-around-time-progress'

export const TurnAroundTimeCell = ({ cellData, column }) => {
  const props = get(column, 'props', {})
  if (typeof cellData !== 'object') cellData = {}

  return <TurnAroundTimeProgress {...props} {...cellData} />
}

export default TurnAroundTimeCell
