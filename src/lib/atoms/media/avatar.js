import React from 'react'
import PropTypes from 'prop-types'
import { Image, Icon } from 'semantic-ui-react'
import faker from 'faker'


class Avatar extends React.PureComponent {
  render() {
    const { profileImage } = this.props

    let src = profileImage
    if (!src) {
      src = faker.internet.avatar()
    }

    return (
      <div>
        <Image avatar src={src} />
        <Icon name="chevron down" size="small"/>
      </div>
    )
  }
}


Avatar.propTypes = {
  profileImage: PropTypes.string,
}

Avatar.defaultProps = {
  profileImage: undefined,
}

export default Avatar
