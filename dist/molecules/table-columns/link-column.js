import _objectSpread from"@babel/runtime/helpers/esm/objectSpread";import _classCallCheck from"@babel/runtime/helpers/esm/classCallCheck";import _createClass from"@babel/runtime/helpers/esm/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/esm/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/esm/getPrototypeOf";import _inherits from"@babel/runtime/helpers/esm/inherits";/* eslint react/forbid-foreign-prop-types: 0 */import React from"react";import PropTypes from"prop-types";import{Column}from"react-virtualized";import{get}from"lodash";import{LinkCell}from"../../index";// See: https://github.com/bvaughn/react-virtualized/pull/748
// Note: Facebook argues against inheritance https://reactjs.org/docs/composition-vs-inheritance.html
// But Table won't accept anything other than type of Column
// Submitted an issue shown here: https://github.com/bvaughn/react-virtualized/issues/898
var cellDataGetter=function(a){// See: https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md#celldatagetter
// props: { columnData, dataKey, rowData }
var b=a.rowData,c=a.dataKey;return get(b,c,"N/A")},cellRenderer=function(a){// See: https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md#cellrenderer
// props: { cellData, columnData, columnIndex, dataKey, isScrolling, rowData, rowIndex }
var b=a.cellData,c=a.columnData,d=a.rowIndex,e=c.as,f=c.urlBuilder,g={};return"a"===e?g.href=f(b):g.to=f(b),React.createElement(LinkCell,Object.assign({linkAs:e,content:b,rowIndex:d},g))},headerRenderer=function(a){// See: https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md#headerrenderer
// props: { columnData, dataKey, disableSort, label, sortBy, sortDirection, }
var b=a.label;return React.createElement("p",null,b)},LinkColumn=/*#__PURE__*/function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,_getPrototypeOf(b).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:"render",value:function a(){return React.createElement(Column,this.props)}}]),b}(Column);LinkColumn.propTypes=_objectSpread({},Column.propTypes,{cellDataGetter:PropTypes.func.isRequired,cellRenderer:PropTypes.func.isRequired,headerRenderer:PropTypes.func.isRequired,columnData:PropTypes.shape({as:PropTypes.oneOfType([PropTypes.string,PropTypes.func]),urlBuilder:PropTypes.func.isRequired})}),LinkColumn.defaultProps=_objectSpread({},Column.defaultProps,{cellDataGetter:cellDataGetter,cellRenderer:cellRenderer,headerRenderer:headerRenderer,columnData:{as:"a"}});export default LinkColumn;