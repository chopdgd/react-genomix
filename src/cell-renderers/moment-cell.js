import moment from 'moment'

export const MomentCell = ({ cellData }) => {
  let value = moment(cellData).fromNow()
  if (value === 'Invalid date') value = cellData
  return value
}

export default MomentCell
