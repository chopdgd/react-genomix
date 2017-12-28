import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'semantic-ui-react'

import logo from 'LibSrc/assets/chopLogo.ico'


class Logo extends React.PureComponent {
  render() {
    const { width, src, ...rest } = this.props

    return (
      <Image
        width={width}
        src={src}
        {...rest}
      />
    )
  }
}


Logo.propTypes = {
  width: PropTypes.string,
  src: PropTypes.any,
}

Logo.defaultProps = {
  width: '120px',
  src: logo,
}

export default Logo
