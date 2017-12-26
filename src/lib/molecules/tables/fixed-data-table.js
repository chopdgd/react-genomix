import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'
import { AutoSizer } from 'react-virtualized'
import { Table } from 'fixed-data-table-2'


class FixedDataTable extends React.PureComponent {
  render() {
    const {
      children,
      maxHeight,
      headerHeight,
      rowHeight,
      rowsCount,
      loading,
      ...rest,
     } = this.props

    return (
      <Dimmer.Dimmable dimmed={loading}>
        <Dimmer active={loading} inverted>
          <Loader>Loading Results</Loader>
        </Dimmer>
        <AutoSizer disableHeight>
          {({ width }) => (
            <Table
              className="genomix fixed-data table"
              maxHeight={maxHeight}
              width={width}
              rowsCount={rowsCount}
              headerHeight={headerHeight}
              rowHeight={rowHeight}
              {...rest}
            >
              {children}
            </Table>
          )}
        </AutoSizer>
      </Dimmer.Dimmable>
    )
  }
}


FixedDataTable.propTypes = {}

FixedDataTable.defaultProps = {}

export default FixedDataTable
