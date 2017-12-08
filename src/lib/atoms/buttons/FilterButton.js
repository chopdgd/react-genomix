import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import cx from 'classnames'


const FilterButton = ({ ...props }) => (
  <Button
    { ...props }
    className={cx(props.className, 'genomix')}
  />
)


FilterButton.propTypes = {
  content: PropTypes.string,
  icon: PropTypes.string,
}

FilterButton.defaultProps = {
  content: 'Filter',
  icon: 'filter',
}

export default FilterButton
