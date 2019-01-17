import React from 'react'
import PropTypes from 'prop-types'
import { CSVLink } from 'react-csv'
import moment from 'moment'

import { Button } from '../../index'


const ExportButton = ({ data, filenamePrefix, content, ...rest }) => {
  const timestamp = moment().format('YYYY_MM_DD-HH_mm_ss')

  return (
    <CSVLink
      filename={`${filenamePrefix}-${timestamp}.csv`}
      target="" // Bypass AdBlockers
      data={data}
      {...rest}
    >
      {content}
    </CSVLink>
  )
}


ExportButton.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape),
  filenamePrefix: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
}

ExportButton.defaultProps = {
  data: [],
  content: <Button content="Export" icon="download" />,
  filenamePrefix: 'export',
}


export default ExportButton
