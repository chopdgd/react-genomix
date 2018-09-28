/**
 * Returns a createElement() type based on the props of the Component.
 * Useful for calculating what type a component should render as.
 *
 * @param {function} Component A function or ReactClass.
 * @param {object} props A ReactElement props object
 * @returns {string|function} A ReactElement type
 */function getElementType(a,b){var c=a.defaultProps,d=void 0===c?{}:c;// ----------------------------------------
// user defined "as" element type
return b.as&&b.as!==d.as?b.as:b.href?"a":d.as||"div";// ----------------------------------------
// infer anchor links
// ----------------------------------------
// use defaultProp or 'div'
}export default getElementType;