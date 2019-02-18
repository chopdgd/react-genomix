import PropTypes from 'prop-types'

export const as = (...args) => PropTypes.oneOfType([PropTypes.string, PropTypes.func])(...args)
