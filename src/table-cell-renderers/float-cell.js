import { get } from 'lodash'

export const FloatCell = ({ cellData, column }) => {
  const value = parseFloat(cellData)
  const length = get(column, 'length', 8)
  return value.toFixed(length)
}

export default FloatCell
