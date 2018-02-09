import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'semantic-ui-react'

import logo from 'LibSrc/assets/chopLogo.ico'


const Logo = props => <Image {...props} />


Logo.propTypes = {
  width: PropTypes.string,
  src: PropTypes.any,
}

Logo.defaultProps = {
  width: '120px',
  src: logo,
}


export default Logo
