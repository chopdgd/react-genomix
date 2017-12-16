import React from 'react'
import PropTypes from 'prop-types'
import { Popup, Progress } from 'semantic-ui-react'

import dateFormatter from '../../utils/dateFormatter'
import getTurnAroundTimeDetails from '../../utils/getTurnAroundTimeDetails'


class TurnAroundTimeProgress extends React.PureComponent {
  renderNA = () => {
    return (
      <p>
        Not started!
      </p>
    )
  }

  renderProgress = () => {
    const { target, start, signout, ...rest } = this.props
    const { label, color, value } = getTurnAroundTimeDetails(target, start, signout)

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
          <strong>Started:</strong> {dateFormatter(start)}<br />
          <strong>Signed out:</strong> {signout ? dateFormatter(signout): "N/A"}
        </Popup.Content>
      </Popup>
    )
  }

  render() {
    const { start } = this.props

    if (start) {
      return this.renderProgress()
    } else {
      return this.renderNA()
    }
  }
}


TurnAroundTimeProgress.propTypes = {
  target: PropTypes.number.isRequired,
  start: PropTypes.string,
  signout: PropTypes.string,
}

TurnAroundTimeProgress.defaultProps = {}

export default TurnAroundTimeProgress
