import moment from 'moment'


const dateFormatter = (date, format) => moment(date, format).format('MM/DD/YYYY')

export default dateFormatter
