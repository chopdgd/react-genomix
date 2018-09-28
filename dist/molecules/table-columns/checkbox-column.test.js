import React from"react";import{shallow}from"enzyme";import{CheckboxCell,CheckboxColumn}from"../../index";describe("Test CheckboxColumn",function(){it("cellDataGetter returns expected content",function(){var a="name",b=React.createElement(CheckboxColumn,{label:"test",dataKey:a,width:100,columnData:{onChange:jest.fn(),checked:[]}}),c=shallow(b);expect(c.find("Column").props().cellDataGetter({rowData:{name:"mike",value:"1"},dataKey:a})).toEqual("mike")}),it("cellRenderer returns expected content",function(){var a="name",b=jest.fn(),c={onChange:b,checked:[1]},d=React.createElement(CheckboxColumn,{label:"test",dataKey:a,width:100,columnData:c}),e=shallow(d);expect(e.find("Column").props().cellRenderer({dataKey:a,columnData:c,cellData:"mike",rowIndex:1})).toEqual(React.createElement(CheckboxCell,{as:"div",onChange:b,rowIndex:1,checked:[1]}))}),it("headerRenderer returns expected content",function(){var a=React.createElement(CheckboxColumn,{label:"Mike Column",dataKey:"test",width:100,columnData:{onChange:jest.fn(),checked:[]}}),b=shallow(a);expect(b.find("Column").props().headerRenderer({label:"Mike Column"})).toEqual(React.createElement("p",null,"Mike Column"))})});