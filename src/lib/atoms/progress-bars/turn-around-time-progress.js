import React from 'react'
import PropTypes from 'prop-types'
import { Popup, Progress } from 'semantic-ui-react'

import { utils } from 'LibIndex'


const TurnAroundTimeProgress = props => {
  const { target, start, signout, ...rest } = props
  const { label, color, value } = utils.getTurnAroundTimeDetails(target, start, signout)

  if (start) {
    return (
      <Popup
        flowing
        trigger={
          <Progress
            value={value}
            total={target}
            label={label}
            color={color}
            active
            {...rest}
          />
        }
      >
        <Popup.Content>
          <strong>Target:</strong> {target} days<br />
          <strong>Started:</strong> {utils.dateFormatter(start)}<br />
          <strong>Signed out:</strong> {signout ? utils.dateFormatter(signout): "N/A"}
        </Popup.Content>
      </Popup>
    )
  } else {
    return (
      <p>
        Not started!
      </p>
    )
  }
}


TurnAroundTimeProgress.propTypes = {
  target: PropTypes.number,
  start: PropTypes.string,
  signout: PropTypes.string,
}

TurnAroundTimeProgress.defaultProps = {}


export default TurnAroundTimeProgress
