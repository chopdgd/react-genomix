import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Label } from 'semantic-ui-react'
import BaseTable, { AutoResizer } from 'react-base-table'
import 'react-base-table/styles.css'

const BasicTable = props => {
  const {
    children,
    rows = [],
    maxHeight = 500,
    loading = false,
    segment = {
      basic: true,
      size: 'mini',
      textAlign: 'center',
      style: { padding: 0, width: '100%', height: maxHeight },
    },
    ...rest
  } = props

  const renderLabelOverlay = () => {
    if (loading) return <Label content="Loading..." color="blue" />
    return null
  }

  return (
    <Segment {...segment}>
      <AutoResizer>
        {({ width, height }) => (
          <BaseTable
            className="genomix basic data table"
            data={rows}
            width={width}
            height={height}
            maxHeight={maxHeight}
            overlayRenderer={renderLabelOverlay}
            {...rest}
          >
            {children}
          </BaseTable>
        )}
      </AutoResizer>
    </Segment>
  )
}

BasicTable.propTypes = {
  children: PropTypes.any,
  maxHeight: PropTypes.number,
  loading: PropTypes.bool,
  segment: PropTypes.object,
  rows: PropTypes.array,
}

export default BasicTable
