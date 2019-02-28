import React from 'react'
import PropTypes from 'prop-types'
import { Button, Popup, Icon } from 'semantic-ui-react'

const RatingPopup = ({ database, value, url }) => {
  let color = 'grey'
  let message = `Not present in ${database}!`
  let content = <p>{message}</p>

  if (value) {
    color = 'yellow'
    message = `Present in ${database}!`
    content = (
      <div>
        <p>{message}</p>
        <a target="_blank" rel="noopener noreferrer" href={url}>
          <Button fluid content={`Go to ${database}`} />
        </a>
      </div>
    )
  }

  return <Popup trigger={<Icon color={color} name="star" />} content={content} hoverable />
}

RatingPopup.propTypes = {
  database: PropTypes.string,
  value: PropTypes.any,
  url: PropTypes.string,
}

export default RatingPopup
