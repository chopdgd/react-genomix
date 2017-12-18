import React from 'react'
import PropTypes from 'prop-types'
import { Dimmer, Loader } from 'semantic-ui-react'
import { AutoSizer, Table } from 'react-virtualized'
import { concat, differenceWith, isEqual } from 'lodash'
import cx from 'classnames'


class BigDataTable extends React.PureComponent {
  constructor(props, context) {
    super(props)

    this.state = {
      rows: props.data,
      loading: props.loading,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { data, loading } = this.props

    if (nextProps.data !== data) {
      const { rows } = this.state
      const newData = differenceWith(nextProps.data, rows, isEqual)
      if (newData.length > 0) {
        this.setState({ rows: concat(rows, newData) })
      }
    }

    if (nextProps.loading !== loading) {
      this.setState({ loading: nextProps.loading })
    }
  }

  noRowsRenderer = () => (
    <h1 className="no rows">No rows!</h1>
  )

  rowClassName = ({ index }) => {
    const { headerTextAlign, rowTextAlign } = this.props

    if (index < 0) {
      return cx("header row", headerTextAlign)
    } else {
      return index % 2 === 0 ? cx("even row", rowTextAlign)  : cx("odd row", rowTextAlign)
    }
  }

  render() {
    const { children, height, headerHeight, rowHeight, scrollToIndex } = this.props
    const { rows, loading } = this.state

    return (
      <Dimmer.Dimmable dimmed={loading}>
        <Dimmer active={loading} inverted>
          <Loader>Loading Results</Loader>
        </Dimmer>
        <AutoSizer disableHeight>
          {({ width }) => (
            <Table
              className="genomix big-data table"
              height={height}
              width={width}
              headerClassName="header col"
              headerHeight={headerHeight}
              rowClassName={this.rowClassName}
              rowHeight={rowHeight}
              rowCount={rows.length}
              rowGetter={({ index }) => rows[index]}
              noRowsRenderer={this.noRowsRenderer}
              scrollToIndex={scrollToIndex}
            >
              {children}
            </Table>
          )}
        </AutoSizer>
      </Dimmer.Dimmable>
    )
  }
}


BigDataTable.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
  height: PropTypes.number.isRequired,
  headerHeight: PropTypes.number.isRequired,
  headerTextAlign: PropTypes.oneOf(['left', 'center', 'right']),
  rowHeight: PropTypes.number.isRequired,
  rowTextAlign: PropTypes.oneOf(['left', 'center', 'right']),
  scrollToIndex: PropTypes.number,

}

BigDataTable.defaultProps = {
  data: [],
  loading: false,
  height: 500,
  headerHeight: 40,
  headerTextAlign: 'center',
  rowHeight: 40,
  rowTextAlign: 'left',
  scrollToIndex: -1,
}

export default BigDataTable
