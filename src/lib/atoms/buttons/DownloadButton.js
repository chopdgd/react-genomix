import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button';


const DownloadButton = ({ ...props }) => (
  <Button
    { ...props }
  />
)


DownloadButton.propTypes = {
  content: PropTypes.string,
  icon: PropTypes.string,
}

DownloadButton.defaultProps = {
  content: 'Download',
  icon: 'download',
}

export default DownloadButton
