import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'semantic-ui-react'

const AutoCompleteDropDown = ({ endpoint, searchAction, waitInterval, loading, ...props }) => {
  const [state, setState] = useState(false)
  const countRef = useRef(null)
  countRef.current = null

  useEffect(() => setState(loading), [loading])

  const onSearchChange = (e, { searchQuery }) => {
    clearTimeout(countRef.current)
    countRef.current = setTimeout(() => searchAction(searchQuery), waitInterval)
    setState(true)
  }

  return <Dropdown search selection onSearchChange={onSearchChange} loading={state} {...props} />
}

AutoCompleteDropDown.propTypes = {
  searchAction: PropTypes.func.isRequired,
  waitInterval: PropTypes.number,
  loading: PropTypes.bool,
}

AutoCompleteDropDown.defaultProps = {
  waitInterval: 750,
  loading: false,
}

export default AutoCompleteDropDown
