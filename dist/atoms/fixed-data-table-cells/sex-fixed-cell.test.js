import React from"react";import ReactDOM from"react-dom";import{shallow}from"enzyme";import{SexFixedCell}from"../../index";describe("Test SexFixedCell",function(){var a=[{sex:"male"},{sex:"f"},{sex:"unknown"}];it("renders without crashing",function(){var b=document.createElement("div"),c=React.createElement(SexFixedCell,{data:a,rowIndex:1,columnKey:"sex"});ReactDOM.render(c,b)}),it("renders the first record with rowIndex = 0",function(){var b=React.createElement(SexFixedCell,{data:a,rowIndex:0,columnKey:"sex"}),c=shallow(b);expect(c.find("MaleIcon")).toHaveLength(1)}),it("renders the second record with rowIndex = 1",function(){var b=React.createElement(SexFixedCell,{data:a,rowIndex:1,columnKey:"sex"}),c=shallow(b);expect(c.find("FemaleIcon")).toHaveLength(1)}),it("renders the third record with rowIndex = 2",function(){var b=React.createElement(SexFixedCell,{data:a,rowIndex:2,columnKey:"sex"}),c=shallow(b);expect(c.find("QuestionIcon")).toHaveLength(1)})});