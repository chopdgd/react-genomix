import _objectWithoutProperties from"@babel/runtime/helpers/esm/objectWithoutProperties";import React from"react";import{Cell}from"fixed-data-table-2";import{get}from"lodash";var TextFixedCell=function(a){var b=a.data,c=a.rowIndex,d=a.columnKey,e=_objectWithoutProperties(a,["data","rowIndex","columnKey"]),f=get(b[c],d);return React.createElement(Cell,e,f)};TextFixedCell.defaultProps={data:[]};export default TextFixedCell;