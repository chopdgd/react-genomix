import React from 'react'
import PropTypes from 'prop-types'
import { Cell } from 'fixed-data-table-2'
import { Label } from 'semantic-ui-react'
import { get } from 'lodash'

import { utils } from 'LibIndex'


class InterpretationFixedCell extends React.PureComponent {
  render() {
    const { labelProps, data, rowIndex, columnKey, ...rest } = this.props
    const classification = get(data[rowIndex], columnKey)
    const color = utils.getInterpretationColor(classification)

    return (
      <Cell {...rest}>
        <Label {...labelProps} color={color} content={classification} />
      </Cell>
    )
  }
}


InterpretationFixedCell.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  rowIndex: PropTypes.number,
  columnKey: PropTypes.string,
  labelProps: PropTypes.object,
}

InterpretationFixedCell.defaultProps = {
  data: [],
  labelProps: {
    basic: true,
  },
}

export default InterpretationFixedCell
