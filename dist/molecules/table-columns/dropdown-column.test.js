import React from"react";import{shallow}from"enzyme";import{DropdownCell,DropdownColumn}from"../../index";describe("Test DropdownColumn",function(){it("cellDataGetter returns expected content",function(){var a="name",b=React.createElement(DropdownColumn,{label:"test",dataKey:a,width:100,columnData:{options:[{key:"key2",value:2,text:"2"}],onChange:jest.fn()}}),c=shallow(b);expect(c.find("Column").props().cellDataGetter({rowData:{name:"mike",value:"1"},dataKey:a})).toEqual("mike")}),it("cellRenderer returns expected content",function(){var a="test",b=jest.fn(),c={options:[{key:"key2",value:2,text:"2"}],onChange:b},d=React.createElement(DropdownColumn,{label:"test",dataKey:a,width:100,columnData:c}),e=shallow(d),f=React.createElement(DropdownCell,{as:"div",name:"test",onChange:b,options:[{key:"key2",value:2,text:"2"}],content:"mike",rowIndex:1,dropDownProps:{fluid:!1,multiple:!1,selection:!0,search:!0}});expect(e.find("Column").props().cellRenderer({dataKey:a,columnData:c,cellData:"mike",rowIndex:1})).toEqual(f)}),it("headerRenderer returns expected content",function(){var a=React.createElement(DropdownColumn,{label:"test",dataKey:"test",width:100,columnData:{options:[{key:"key2",value:2,text:"2"}],onChange:jest.fn()}}),b=shallow(a);expect(b.find("Column").props().headerRenderer({label:"Mike Column"})).toEqual(React.createElement("p",null,"Mike Column"))})});