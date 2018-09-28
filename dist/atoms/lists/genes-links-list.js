import _objectWithoutProperties from"@babel/runtime/helpers/esm/objectWithoutProperties";import React from"react";import{List}from"semantic-ui-react";import{get,map}from"lodash";import{utils,BasicLabel,Link}from"../../index";var GeneLinksList=function(a){var b=a.genes,c=_objectWithoutProperties(a,["genes"]);return React.createElement(List,c,map(b,function(a){var b=get(a,"symbol"),c=get(a,"ensemblId");return React.createElement(List.Item,{key:b},React.createElement(List.Content,null,b,React.createElement(Link,{href:utils.urlBuilders.omimSearch(b),content:React.createElement(BasicLabel,{color:"green",content:"OMIM"})}),React.createElement(Link,{href:utils.urlBuilders.hgmdGene(b),content:React.createElement(BasicLabel,{color:"blue",content:"HGMD"})}),React.createElement(Link,{href:utils.urlBuilders.geneReviewsEntry(b),content:React.createElement(BasicLabel,{color:"blue",content:"GeneReviews"})}),React.createElement(Link,{href:utils.urlBuilders.gtexEntry(b),content:React.createElement(BasicLabel,{color:"red",content:"GTEx"})}),c&&React.createElement(Link,{href:utils.urlBuilders.exacGeneEntry(c),content:React.createElement(BasicLabel,{color:"black",content:"ExAC"})}),c&&React.createElement(Link,{href:utils.urlBuilders.gnomadGeneEntry(c),content:React.createElement(BasicLabel,{color:"black",content:"gnomAD"})})))}))};export default GeneLinksList;