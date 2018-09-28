import React from"react";import ReactDOM from"react-dom";import{shallow}from"enzyme";import{Icon}from"semantic-ui-react";import{PublicEvidenceFixedCell}from"../../index";describe("Test PublicEvidenceFixedCell",function(){var a=[{columnKey:"columnKey",chromosome:"1",position:10,reference:"A",alternate:"T",cosmic:"COSM10",hgmd:"CM1",clinvar:1111,gnomad:.05}];it("renders without crashing",function(){var b=document.createElement("div"),c=React.createElement(PublicEvidenceFixedCell,{data:a,rowIndex:0,columnKey:"columnKey",chromosomeKey:"chromosome",positionKey:"position",referenceKey:"reference",alternateKey:"alternate",cosmicKey:"cosmic",hgmdKey:"hgmd",clinvarKey:"clinvar",gnomadKey:"gnomad"});ReactDOM.render(c,b)}),it("renders the first record with rowIndex = 0",function(){var b=React.createElement(PublicEvidenceFixedCell,{data:a,rowIndex:0,columnKey:"columnKey",chromosomeKey:"chromosome",positionKey:"position",referenceKey:"reference",alternateKey:"alternate",cosmicKey:"cosmic",hgmdKey:"hgmd",clinvarKey:"clinvar",gnomadKey:"gnomad"}),c=shallow(b);expect(c.props().children).toHaveLength(4),expect(c.find("Popup")).toHaveLength(4)}),it("renders only 1 star for COSMIC",function(){var b=React.createElement(PublicEvidenceFixedCell,{data:a,rowIndex:0,columnKey:"columnKey",chromosomeKey:"chromosome",positionKey:"position",referenceKey:"reference",alternateKey:"alternate",cosmicKey:"cosmic"// hgmdKey="hgmd"
// clinvarKey="clinvar"
// gnomadKey="gnomad"
}),c=shallow(b);expect(c.props().children[0].props.trigger).toEqual(React.createElement(Icon,{as:"i",color:"yellow",name:"star"})),expect(c.props().children[1].props.trigger).toEqual(React.createElement(Icon,{as:"i",color:"grey",name:"star"})),expect(c.props().children[2].props.trigger).toEqual(React.createElement(Icon,{as:"i",color:"grey",name:"star"})),expect(c.props().children[3].props.trigger).toEqual(React.createElement(Icon,{as:"i",color:"grey",name:"star"}))}),it("renders only 1 star for HGMD",function(){var b=React.createElement(PublicEvidenceFixedCell,{data:a,rowIndex:0,columnKey:"columnKey",chromosomeKey:"chromosome",positionKey:"position",referenceKey:"reference",alternateKey:"alternate"// cosmicKey="cosmic"
,hgmdKey:"hgmd"// clinvarKey="clinvar"
// gnomadKey="gnomad"
}),c=shallow(b);expect(c.props().children[0].props.trigger).toEqual(React.createElement(Icon,{as:"i",color:"grey",name:"star"})),expect(c.props().children[1].props.trigger).toEqual(React.createElement(Icon,{as:"i",color:"yellow",name:"star"})),expect(c.props().children[2].props.trigger).toEqual(React.createElement(Icon,{as:"i",color:"grey",name:"star"})),expect(c.props().children[3].props.trigger).toEqual(React.createElement(Icon,{as:"i",color:"grey",name:"star"}))}),it("renders only 1 star for ClinVar",function(){var b=React.createElement(PublicEvidenceFixedCell,{data:a,rowIndex:0,columnKey:"columnKey",chromosomeKey:"chromosome",positionKey:"position",referenceKey:"reference",alternateKey:"alternate"// cosmicKey="cosmic"
// hgmdKey="hgmd"
,clinvarKey:"clinvar"// gnomadKey="gnomad"
}),c=shallow(b);expect(c.props().children[0].props.trigger).toEqual(React.createElement(Icon,{as:"i",color:"grey",name:"star"})),expect(c.props().children[1].props.trigger).toEqual(React.createElement(Icon,{as:"i",color:"grey",name:"star"})),expect(c.props().children[2].props.trigger).toEqual(React.createElement(Icon,{as:"i",color:"yellow",name:"star"})),expect(c.props().children[3].props.trigger).toEqual(React.createElement(Icon,{as:"i",color:"grey",name:"star"}))}),it("renders only 1 star for gnomAD",function(){var b=React.createElement(PublicEvidenceFixedCell,{data:a,rowIndex:0,columnKey:"columnKey",chromosomeKey:"chromosome",positionKey:"position",referenceKey:"reference",alternateKey:"alternate"// cosmicKey="cosmic"
// hgmdKey="hgmd"
// clinvarKey="clinvar"
,gnomadKey:"gnomad"}),c=shallow(b);expect(c.props().children[0].props.trigger).toEqual(React.createElement(Icon,{as:"i",color:"grey",name:"star"})),expect(c.props().children[1].props.trigger).toEqual(React.createElement(Icon,{as:"i",color:"grey",name:"star"})),expect(c.props().children[2].props.trigger).toEqual(React.createElement(Icon,{as:"i",color:"grey",name:"star"})),expect(c.props().children[3].props.trigger).toEqual(React.createElement(Icon,{as:"i",color:"yellow",name:"star"}))}),it("renders only 2 stars for gnomAD and ClinVar",function(){var b=React.createElement(PublicEvidenceFixedCell,{data:a,rowIndex:0,columnKey:"columnKey",chromosomeKey:"chromosome",positionKey:"position",referenceKey:"reference",alternateKey:"alternate"// cosmicKey="cosmic"
// hgmdKey="hgmd"
,clinvarKey:"clinvar",gnomadKey:"gnomad"}),c=shallow(b);expect(c.props().children[0].props.trigger).toEqual(React.createElement(Icon,{as:"i",color:"grey",name:"star"})),expect(c.props().children[1].props.trigger).toEqual(React.createElement(Icon,{as:"i",color:"grey",name:"star"})),expect(c.props().children[2].props.trigger).toEqual(React.createElement(Icon,{as:"i",color:"yellow",name:"star"})),expect(c.props().children[3].props.trigger).toEqual(React.createElement(Icon,{as:"i",color:"yellow",name:"star"}))})});