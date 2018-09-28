import _classCallCheck from"@babel/runtime/helpers/esm/classCallCheck";import _possibleConstructorReturn from"@babel/runtime/helpers/esm/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/esm/getPrototypeOf";import _createClass from"@babel/runtime/helpers/esm/createClass";import _inherits from"@babel/runtime/helpers/esm/inherits";import React from"react";import{Dimmer,Loader}from"semantic-ui-react";import{AutoSizer,Table}from"react-virtualized";import{concat,differenceWith,isEqual}from"lodash";import cx from"classnames";var BigDataTable=/*#__PURE__*/function(a){function b(a){var c;return _classCallCheck(this,b),c=_possibleConstructorReturn(this,_getPrototypeOf(b).call(this,a)),c.noRowsRenderer=function(){return React.createElement("h1",{className:"no rows"},"No rows!")},c.rowClassName=function(a){var b=a.index,d=c.props,e=d.headerTextAlign,f=d.rowTextAlign;return 0>b?cx("header row",e):0==b%2?cx("even row",f):cx("odd row",f)},c.state={rows:a.data,loading:a.loading},c}return _inherits(b,a),_createClass(b,null,[{key:"getDerivedStateFromProps",value:function g(a,b){var c=a.data,d=a.loading,e=b.rows,f=differenceWith(c,e,isEqual);return d!==b.loading||0<f.length?{loading:d,rows:concat(e,f)}:null}}]),_createClass(b,[{key:"render",value:function k(){var a=this,b=this.props,c=b.children,d=b.height,e=b.headerHeight,f=b.rowHeight,g=b.scrollToIndex,h=this.state,i=h.rows,j=h.loading;return React.createElement(Dimmer.Dimmable,{dimmed:j},React.createElement(Dimmer,{active:j,inverted:!0},React.createElement(Loader,null,"Loading Results")),React.createElement(AutoSizer,{disableHeight:!0},function(b){var h=b.width;return React.createElement(Table,{className:"genomix big-data table",height:d,width:h,headerClassName:"header col",headerHeight:e,rowClassName:a.rowClassName,rowHeight:f,rowCount:i.length,rowGetter:function c(a){var b=a.index;return i[b]},noRowsRenderer:a.noRowsRenderer,scrollToIndex:g},c)}))}}]),b}(React.Component);BigDataTable.defaultProps={data:[],loading:!1,height:500,headerHeight:40,headerTextAlign:"center",rowHeight:40,rowTextAlign:"left",scrollToIndex:-1};export default BigDataTable;