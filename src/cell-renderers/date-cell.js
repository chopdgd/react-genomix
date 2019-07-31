import { utils } from '../../src/index'

export const DateCell = ({ cellData, column }) => {
  let value = utils.dateFormatter(cellData)
  if (value === 'Invalid date') value = cellData
  return value
}

export default DateCell
