import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

import { ExternalIcon, InfoIcon } from 'LibIndex'


class LinkCell extends React.PureComponent {
  render() {
    const { as, content, linkAs, path, rowIndex, ...rest } = this.props

    let link = (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={path}
      >
        {content} <ExternalIcon />
      </a>
    )

    if (linkAs !== 'a') {
      link = (
        <linkAs to={path}>
          {content} <InfoIcon />
        </linkAs>
      )
    }

    if (as === 'td') {
      return (
        <Table.Cell {...rest}>
          {link}
        </Table.Cell>
      )
    } else {
      return (
        <div>
          {link}
        </div>
      )
    }
  }
}


LinkCell.propTypes = {
  as: PropTypes.oneOf(['td', 'div']),
  linkAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  path: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]).isRequired,
  rowIndex: PropTypes.number,
}

LinkCell.defaultProps = {
  as: 'div',
  linkAs: 'a',
}

export default LinkCell
