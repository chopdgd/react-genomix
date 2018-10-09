import React from 'react'
import PropTypes from 'prop-types'
import { Popup, Progress, Label, Icon, Button } from 'semantic-ui-react'

import { utils } from '../../index'


const TurnAroundTimeProgress = props => {
  const { target, start, signout, compact, ...rest } = props
  const { label, color, value, completed } = utils.getTurnAroundTimeDetails(target, start, signout)

  if (start) {
    return (
      <Popup
        flowing
        trigger={
          signout
          ?
          <Button fluid compact size="mini" style={{boxShadow: 'none'}}>
            <Icon name="checkmark" color="green" />
            {compact? null: 'Completed :'}
            <Label circular color={color}>{label}</Label>
          </Button>
          :
          <Progress
            value={value}
            total={target}
            color={color}
            active
            disabled={completed?true:false}
            {...rest}
          >
            <Label>{label}</Label>
          </Progress>
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
  compact: PropTypes.bool,
}

TurnAroundTimeProgress.defaultProps = {
  compact: false
}


export default TurnAroundTimeProgress
