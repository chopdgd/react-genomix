import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

export const LoadingFooterRenderer = () => {
  return (
    <Dimmer inverted active>
      <Loader size="tiny">Loading more...</Loader>
    </Dimmer>
  )
}

export default LoadingFooterRenderer
