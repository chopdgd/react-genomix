import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import cx from 'classnames'


const SearchButton = ({ ...props }) => (
  <Button
    { ...props }
    className={cx(props.className, 'genomix')}
  />
)


SearchButton.propTypes = {
  content: PropTypes.string,
  icon: PropTypes.string,
}

SearchButton.defaultProps = {
  content: 'Search',
  icon: 'search',
}

export default SearchButton
