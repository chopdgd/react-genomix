import React from 'react'
import PropTypes from 'prop-types'
import { Cell } from 'fixed-data-table-2'
import { get } from 'lodash'

import { Link } from 'LibIndex'
import * as customPropTypes from 'LibSrc/helpers/customPropTypes'


class LinkFixedCell extends React.PureComponent {
  render() {
    const { as, urlBuilder, data, rowIndex, columnKey, idKey, ...rest } = this.props
    const content = get(data[rowIndex], columnKey)
    const id = get(data[rowIndex], idKey, undefined)

    // Build url depending if id is passed or search term
    let url = urlBuilder(content)
    if (id !== undefined) {
        url = urlBuilder(id)
    }

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
  idKey: PropTypes.string,
  as: customPropTypes.as,
  urlBuilder: PropTypes.func.isRequired,
}

LinkFixedCell.defaultProps = {
  data: [],
  as: 'a',
}

export default LinkFixedCell
