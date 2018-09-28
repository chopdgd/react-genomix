import React from"react";import ReactDOM from"react-dom";import{shallow}from"enzyme";import{MolecularConsequenceCell}from"../../index";describe("Test MolecularConsequenceCell",function(){it("renders without crashing",function(){var a=document.createElement("div");ReactDOM.render(React.createElement(MolecularConsequenceCell,{consequence:"missense"}),a)}),it("ensure labelProps are spread to label",function(){var a=shallow(React.createElement(MolecularConsequenceCell,{consequence:"missense",labelProps:{size:"large",basic:!0}}));expect(a.find("Label").props()).toEqual({basic:!0,color:"orange",content:"missense",size:"large"})})});