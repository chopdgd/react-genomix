import _objectWithoutProperties from"@babel/runtime/helpers/esm/objectWithoutProperties";import React from"react";import{Cell}from"fixed-data-table-2";import{Icon}from"semantic-ui-react";import{get}from"lodash";var StatusFixedCell=function(a){var b,c=a.data,d=a.rowIndex,e=a.columnKey,f=_objectWithoutProperties(a,["data","rowIndex","columnKey"]),g=get(c[d],e);switch(g){case"pending":b=React.createElement(Icon,{color:"grey",name:"clock"});break;case"running":b=React.createElement(Icon,{className:"genomix",color:"black",name:"spinner"});break;case"complete":b=React.createElement(Icon,{color:"green",name:"checkmark"});break;case"cancelled":b=React.createElement(Icon,{color:"red",name:"dont"});break;case"failed":b=React.createElement(Icon,{color:"red",name:"x"});break;default:b=React.createElement(Icon,{color:"grey",name:"question"});}return React.createElement(Cell,f,b)};StatusFixedCell.defaultProps={data:[]};export default StatusFixedCell;