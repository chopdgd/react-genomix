import React from 'react'
import PropTypes from 'prop-types'
import { CSVLink } from 'react-csv'
import moment from 'moment'
import { get } from 'lodash'

import { Button } from 'LibIndex'


class ExportButton extends React.PureComponent {
  handleReformat = () => {
    const { data, onExport } = this.props

    if (onExport) {
      this.setState({ data: onExport(data) })
    } else {
      this.setState({ data })
    }
  }

  render() {
    const { content, data , filenamePrefix, onExport, ...rest } = this.props
    const timestamp = moment().format('YYYY_MM_DD-HH_mm_ss')

    return (
      <CSVLink
        filename={`${filenamePrefix}-${timestamp}.csv`}
        target="_blank"
        data={get(this.state, 'data', [])}
        {...rest}
        onClick={this.handleReformat}
      >
        {content}
      </CSVLink>
    )
  }
}


ExportButton.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape),
  content: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  filenamePrefix: PropTypes.string,
  onExport: PropTypes.func,
}

ExportButton.defaultProps = {
  data: [],
  content: <Button content="Export" icon="download" />,
  filenamePrefix: 'export',
}

export default ExportButton
