import React from 'react'
import PropTypes from 'prop-types'
import { Cell } from 'fixed-data-table-2'
import { Label } from 'semantic-ui-react'
import { get } from 'lodash'

import { utils, Link } from '../index'

const TranscriptFixedCell = props => {
  const { data, rowIndex, columnKey, ...rest } = props
  const transcript = get(data[rowIndex], columnKey)

  return (
    <Cell {...rest}>
      {transcript} &nbsp;&nbsp;
      <Link
        content={<Label basic size="tiny" content="A" color="brown" />}
        href={utils.urlBuilders.alamutEntry(transcript)}
      />
    </Cell>
  )
}

TranscriptFixedCell.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  rowIndex: PropTypes.number,
  columnKey: PropTypes.string,
}

TranscriptFixedCell.defaultProps = {
  data: [],
}

export default TranscriptFixedCell
