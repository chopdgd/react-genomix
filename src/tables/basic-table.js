import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Label } from 'semantic-ui-react'
import BaseTable, { AutoResizer } from 'react-base-table'
import 'react-base-table/styles.css'

const LabelOverlay = props => {
  return <Label content="Loading..." size="small" color="orange" />
}

const BasicTable = ({
  children,
  rows = [],
  maxHeight = 500,
  loading = false,
  segment = { basic: true, size: 'mini', textAlign: 'center', style: { padding: 0, width: '100%', height: maxHeight } },
  ...rest
}) => (
  <Segment {...segment}>
    <AutoResizer>
      {({ width, height }) => (
        <BaseTable
          data={rows}
          width={width}
          height={height}
          maxHeight={maxHeight}
          overlayRenderer={loading && LabelOverlay}
          {...rest}
        >
          {children}
        </BaseTable>
      )}
    </AutoResizer>
  </Segment>
)

BasicTable.propTypes = {
  rows: PropTypes.array(),
}

export default BasicTable
