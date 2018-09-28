import React from"react";import{shallow}from"enzyme";import{MolecularConsequenceCell,MolecularConsequenceColumn}from"../../index";describe("Test MolecularConsequenceColumn",function(){it("cellDataGetter returns expected content",function(){var a="consequence",b=React.createElement(MolecularConsequenceColumn,{label:"test",dataKey:a,width:100}),c=shallow(b);expect(c.find("Column").props().cellDataGetter({rowData:{consequence:"missense"},dataKey:a})).toEqual("missense")}),it("cellRenderer returns expected content",function(){var a=React.createElement(MolecularConsequenceColumn,{label:"test",dataKey:"test",width:100}),b=shallow(a);expect(b.find("Column").props().cellRenderer({cellData:"splice",rowIndex:1})).toEqual(React.createElement(MolecularConsequenceCell,{as:"div",consequence:"splice",rowIndex:1}))}),it("headerRenderer returns expected content",function(){var a=React.createElement(MolecularConsequenceColumn,{label:"Header Column",dataKey:"test",width:100}),b=shallow(a);expect(b.find("Column").props().headerRenderer({label:"Header Column"})).toEqual(React.createElement("p",null,"Header Column"))})});