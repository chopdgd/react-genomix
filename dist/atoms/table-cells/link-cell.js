import React from"react";import{Link}from"../../index";import*as customPropTypes from"../../helpers/customPropTypes";import getElementType from"../../helpers/getElementType";import getUnhandledProps from"../../helpers/getUnhandledProps";var LinkCell=function(a){var b=a.as,c=a.linkAs,d=a.content,e=getElementType(LinkCell,{as:b}),f=getUnhandledProps(LinkCell,a);return React.createElement(e,f,React.createElement(Link,Object.assign({},f,{as:c,content:d})))};LinkCell.defaultProps={as:"div",linkAs:"a"},LinkCell.handledProps=["as","rowIndex","content","linkAs"];export default LinkCell;