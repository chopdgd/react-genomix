import _objectWithoutProperties from"@babel/runtime/helpers/esm/objectWithoutProperties";import _classCallCheck from"@babel/runtime/helpers/esm/classCallCheck";import _createClass from"@babel/runtime/helpers/esm/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/esm/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/esm/getPrototypeOf";import _inherits from"@babel/runtime/helpers/esm/inherits";import React from"react";import{CSVLink}from"react-csv";import moment from"moment";import{get}from"lodash";import{Button}from"../../index";var ExportButton=/*#__PURE__*/function(a){function b(){var a,c;_classCallCheck(this,b);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=_possibleConstructorReturn(this,(a=_getPrototypeOf(b)).call.apply(a,[this].concat(e))),c.handleReformat=function(a,b){var d=c.props,e=d.data,f=d.onExport,g=d.onClick;f?c.setState({data:f(e)}):c.setState({data:e}),g&&g(a,b)},c}return _inherits(b,a),_createClass(b,[{key:"render",value:function h(){var a=this.props,b=a.data,c=a.filenamePrefix,d=a.onExport,e=_objectWithoutProperties(a,["data","filenamePrefix","onExport"]),f=moment().format("YYYY_MM_DD-HH_mm_ss"),g=React.cloneElement(this.props.content,{onClick:this.handleReformat});return React.createElement(CSVLink,Object.assign({filename:"".concat(c,"-").concat(f,".csv"),target:""// Bypass AdBlockers
,data:get(this.state,"data",[])},e),g)}}]),b}(React.Component);ExportButton.defaultProps={data:[],content:React.createElement(Button,{content:"Export",icon:"download"}),filenamePrefix:"export"};export default ExportButton;