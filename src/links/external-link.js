import React from 'react'

export const ExternalLink = ({ children, ...rest }) => (
  <a rel="noopener noreferrer" target="_blank" {...rest}>
    {children}
  </a>
)

export default ExternalLink
