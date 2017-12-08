import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import cx from 'classnames'


const DownloadButton = ({ ...props }) => (
  <Button
    { ...props }
    className={cx(props.className, 'genomix')}
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
