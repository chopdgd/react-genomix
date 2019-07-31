import React from 'react'

const ExternalLink = ({ children, ...rest }) => (
  <a rel="noopener noreferrer" target="_blank" {...rest}>
    {children}
  </a>
)

export default ExternalLink
