import React from"react";import ReactDOM from"react-dom";import{shallow}from"enzyme";import{Logo}from"../../index";describe("Test Logo",function(){var a=React.createElement(Logo,null);it("renders without crashing",function(){var b=document.createElement("div");ReactDOM.render(a,b)}),it("renders an <Image />",function(){var b=shallow(a);expect(b.find("Image")).toHaveLength(1)})});