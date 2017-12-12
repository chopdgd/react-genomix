import React from 'react'
import PropTypes from 'prop-types'
import { Sticky, Table, Visibility } from 'semantic-ui-react'
import cx from 'classnames'
import { map, omit } from 'lodash'


class InfiniteScrollTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      next: props.next,
      loading: props.loading,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { next, loading } = this.props

    if (nextProps.next !== next) {
      this.setState({ next: nextProps.next })
    }

    if (nextProps.loading !== loading) {
      this.setState({ loading: nextProps.loading })
    }
  }

  handleContextRef = contextRef => this.setState({ contextRef })

  onBottomVisible = () => {
    const { fetchData } = this.props
    const { next } = this.state

    if (fetchData && next) {
      fetchData(next)
    }
  }

  render() {
    const { contextRef } = this.state
    const { children, className, headerCells } = this.props
    const tableProps = omit(this.props, [
      'className', 'headerCells', 'children', 'fetchData', 'next', 'loading'
    ])

    return (
      <div ref={this.handleContextRef}>
        <Table
          {...tableProps}
          className={cx(className, 'genomix infinite')}
          unstackable
        >

          <Table.Header>
            <Table.Row textAlign="center">
              {map(headerCells, (element, index) =>
                <Table.HeaderCell key={index}>
                  <Sticky context={contextRef}>
                    <div className="genomix infinite th">
                      {element}
                    </div>
                  </Sticky>
                </Table.HeaderCell>
              )}
            </Table.Row>
          </Table.Header>

          <Visibility
            as="tbody"
            continuous={false}
            once={false}
            onBottomVisible={this.onBottomVisible}
          >
            {children}
          </Visibility>

        </Table>
      </div>
    )
  }
}


InfiniteScrollTable.propTypes = {
  headerCells: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  className: PropTypes.string,
  fetchData: PropTypes.func,
  next: PropTypes.string,
  loading: PropTypes.bool,
}

InfiniteScrollTable.defaultProps = {
  loading: false
}

export default InfiniteScrollTable
