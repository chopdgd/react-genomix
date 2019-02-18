import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'semantic-ui-react'
import { omit } from 'lodash'

class AutoCompleteDropDown extends React.Component {
  static getDerivedStateFromProps(props, state) {
    const { loading } = props

    if (loading !== state.loading) {
      return { loading }
    }

    return null
  }

  constructor(props) {
    super(props)

    this.state = {
      loading: props.loading,
    }
  }

  componentDidMount() {
    this.timeout = null
  }

  onSearchChange = (e, { searchQuery }) => {
    const { endpoint, searchAction, waitInterval } = this.props

    const searchURL = `${endpoint}${searchQuery}`
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => searchAction(searchURL), waitInterval)

    this.setState({ loading: true })
  }

  render() {
    const dropdownProps = omit(this.props, ['endpoint', 'loading', 'searchAction', 'waitInterval'])
    const { loading } = this.state

    return <Dropdown search selection onSearchChange={this.onSearchChange} loading={loading} {...dropdownProps} />
  }
}

AutoCompleteDropDown.propTypes = {
  onChange: PropTypes.func,
  searchAction: PropTypes.func.isRequired,
  endpoint: PropTypes.string.isRequired,
  waitInterval: PropTypes.number,
  loading: PropTypes.bool,
}

AutoCompleteDropDown.defaultProps = {
  waitInterval: 750,
  loading: false,
}

export default AutoCompleteDropDown
