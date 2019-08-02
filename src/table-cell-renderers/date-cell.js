import { dateFormatter } from '../utils'

export const DateCell = ({ cellData, column }) => {
  let value = dateFormatter(cellData)
  if (value === 'Invalid date') value = cellData
  return value
}

export default DateCell
