/**
 * Returns a createElement() type based on the props of the Component.
 * Useful for calculating what type a component should render as.
 *
 * @param {function} Component A function or ReactClass.
 * @param {object} props A ReactElement props object
 * @returns {string|function} A ReactElement type
 */
function getElementType(Component, props) {
  const { defaultProps = {} } = Component
  // ----------------------------------------
  // user defined "as" element type

  if (props.as && props.as !== defaultProps.as) return props.as

  // ----------------------------------------
  // infer anchor links

  if (props.href) return 'a'

  // ----------------------------------------
  // use defaultProp or 'div'

  return defaultProps.as || 'div'
}

export default getElementType
