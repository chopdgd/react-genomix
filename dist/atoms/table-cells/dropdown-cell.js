import _classCallCheck from"@babel/runtime/helpers/esm/classCallCheck";import _createClass from"@babel/runtime/helpers/esm/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/esm/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/esm/getPrototypeOf";import _inherits from"@babel/runtime/helpers/esm/inherits";import React from"react";import{Dropdown}from"semantic-ui-react";import*as customPropTypes from"../../helpers/customPropTypes";import getElementType from"../../helpers/getElementType";import getUnhandledProps from"../../helpers/getUnhandledProps";var DropdownCell=/*#__PURE__*/function(a){function b(a){var c;return _classCallCheck(this,b),c=_possibleConstructorReturn(this,_getPrototypeOf(b).call(this,a)),c.onChange=function(a,b){var d=b.name,e=b.value,f=c.props,g=f.onChange,h=f.rowIndex;g({column:d,row:h,value:e}),c.setState({value:e})},c.state={value:""},c}return _inherits(b,a),_createClass(b,[{key:"render",value:function i(){var a=getElementType(b,this.props),c=getUnhandledProps(b,this.props),d=this.state.value,e=this.props,f=e.name,g=e.options,h=e.dropDownProps;return React.createElement(a,c,React.createElement(Dropdown,Object.assign({name:f,value:d,onChange:this.onChange,options:g},h)))}}]),b}(React.Component);DropdownCell.defaultProps={as:"div",dropDownProps:{fluid:!1,multiple:!1,selection:!0,search:!0}},DropdownCell.handledProps=["as","onChange","rowIndex","name","dropDownProps","options"];export default DropdownCell;