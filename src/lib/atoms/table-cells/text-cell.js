import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'


class TextCell extends React.PureComponent {
  render() {
    const { as, content, rowIndex, ...rest } = this.props

    if (as === 'td') {
      return <Table.Cell {...rest}>{content}</Table.Cell>
    } else {
      return <div>{content}</div>
    }
  }
}


TextCell.propTypes = {
  as: PropTypes.oneOf(['td', 'div']),
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]).isRequired,
  rowIndex: PropTypes.number,
}

TextCell.defaultProps = {
  as: 'div'
}

export default TextCell
