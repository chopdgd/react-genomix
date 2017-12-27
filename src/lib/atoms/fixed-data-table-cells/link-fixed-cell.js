import React from 'react'
import PropTypes from 'prop-types'
import { Cell } from 'fixed-data-table-2'
import { get } from 'lodash'

import { Link } from 'LibIndex'
import * as customPropTypes from 'LibSrc/helpers/customPropTypes'


class LinkFixedCell extends React.PureComponent {
  render() {
    const { as, urlBuilder, data, rowIndex, columnKey, ...rest } = this.props
    const content = get(data[rowIndex], columnKey)
    const url = urlBuilder(content)

    let link = <Link as={as} content={content} href={url} />
    if (as !== 'a') {
      link = <Link as={as} content={content} to={url} />
    }


    return (
      <Cell {...rest}>
        {link}
      </Cell>
    )
  }
}


LinkFixedCell.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  rowIndex: PropTypes.number,
  columnKey: PropTypes.string,
  as: customPropTypes.as,
  urlBuilder: PropTypes.func.isRequired,
}

LinkFixedCell.defaultProps = {
  data: [],
  as: 'a',
}

export default LinkFixedCell
