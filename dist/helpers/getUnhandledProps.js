/**
 * Returns an object consisting of props beyond the scope of the Component.
 * Useful for getting and spreading unknown props from the user.
 * @param {function} Component A function or ReactClass.
 * @param {object} props A ReactElement props object
 * @returns {{}} A shallow copy of the prop object
 */var getUnhandledProps=function(a,b){// Note that `handledProps` are generated automatically during build with `babel-plugin-transform-react-handled-props`
var c=a.handledProps,d=void 0===c?[]:c;return Object.keys(b).reduce(function(a,c){return"childKey"===c?a:(-1===d.indexOf(c)&&(a[c]=b[c]),a)},{})};export default getUnhandledProps;