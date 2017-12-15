import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'semantic-ui-react'
import { concat, differenceWith, isEqual, omit } from 'lodash'


class AutoCompleteDropDown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      options: props.options,
      loading: props.loading,
      value: '',
    }
  }

  componentWillMount() {
    this.timeout = null;
  }

  componentWillReceiveProps(nextProps) {
    const { options, loading } = this.props

    if (nextProps.loading !== loading) {
      this.setState({ loading: nextProps.loading })
    }

    if (nextProps.options !== options) {
      const newOptions = differenceWith(nextProps.options, options, isEqual)
      this.setState({ options: concat(options, newOptions) })
    }
  }

  onChange = (e, { name, value }) => {
    const { onChange } = this.props

    onChange({ name, value })
    this.setState({ value })
  }

  onSearchChange = (e, { searchQuery }) => {
    const { endpoint, searchAction, waitInterval } = this.props

    const searchURL = `${endpoint}${searchQuery}`
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => searchAction(searchURL), waitInterval)

    this.setState({
      loading: true,
    });
  }

  render() {
    const { loading, options, value } = this.state
    const dropdownProps = omit(
      this.props,
      ['endpoint', 'searchAction', 'waitInterval']
    )

    return (
      <Dropdown
        {...dropdownProps}
        value={value}
        options={options}
        loading={loading}
        onChange={this.onChange}
        onSearchChange={this.onSearchChange}
      />
    )
  }
}


AutoCompleteDropDown.propTypes = {
  onChange: PropTypes.func.isRequired,
  searchAction: PropTypes.func.isRequired,
  endpoint: PropTypes.string.isRequired,
  waitInterval: PropTypes.number,
  loading: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
      ]),
    }),
  ),
}

AutoCompleteDropDown.defaultProps = {
  waitInterval: 750,
  loading: false,
  options: [],
}

export default AutoCompleteDropDown
