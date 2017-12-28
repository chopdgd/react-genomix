Customized Columns
------------------

We are using [react-virtualized](https://bvaughn.github.io/react-virtualized/) to render tables with large amounts of data.  As part of this, we customized a number of unique columns (some specific for genomics) that we can use right out of the box.  They are listed below:

+ [CheckboxColumn](#checkboxcolumn)
+ [DateColumn](#datecolumn)
+ [DropdownColumn](#dropdowncolumn)
+ [GeneColumn](#genecolumn)
+ [InterpretationColumn](#interpretationcolumn)
+ [LinkColumn](#linkcolumn)
+ [MolecularConsequenceColumn](#molecularconsequencecolumn)
+ [PublicEvidenceColumn](#publicevidencecolumn)
+ [SexColumn](#sexcolumn)
+ [StatusColumn](#statuscolumn)
+ [TextColumn](#textcolumn)
+ [TranscriptColumn](#transcriptcolumn)
+ [TurnAroundTimeProgressColumn](#turnaroundtimeprogresscolumn)

## CheckboxColumn

Renders a [CheckboxCell](CheckboxCell.md). Requires the same props as [react-virtualized Column](https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md).

### Additional Props

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| columnData | Object | ✓ |  | Object with extra props. Requires onChange (see below) |

#### Example

```javascript
  <CheckboxColumn
    label="Checkbox"
    dataKey="checkbox"
    width={100}
    columnData={{ onChange: (props) => alert(JSON.stringify(props)) }}
  />
```

## DateColumn

Renders a [DateCell](DateCell.md). Requires the same props as [react-virtualized Column](https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md).  Nothing additional.

## DropdownColumn

Renders a [DropdownCell](DropdownCell.md). Requires the same props as [react-virtualized Column](https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md).

### Additional Props

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| columnData | Object | ✓ |  | Object with extra props. Requires onChange and options (see below) |

#### Example

```javascript
  <DropdownColumn
    label="Dropdown"
    dataKey="dropdown"
    width={250}
    columnData={{
      onChange: (props) => alert(JSON.stringify(props)),
      options: [{ key: 1, value: 1, text: '1' }],
    }}
  />
```

## GeneColumn

Renders a [GeneCell](GeneCell.md). Requires the same props as [react-virtualized Column](https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md).

## InterpretationColumn

Renders a [InterpretationCell](InterpretationCell.md). Requires the same props as [react-virtualized Column](https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md).

## LinkColumn

Renders a [LinkCell](LinkCell.md). Requires the same props as [react-virtualized Column](https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md).

### Additional Props

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| columnData | Object | ✓ |  | Object with extra props. Requires as and urlBuilder (see below) |

#### Example

```javascript
  <LinkColumn
    label="Link"
    dataKey="link"
    width={80}
    columnData={{
      urlBuilder: (cellData) => `https://www.google.com/search?q=${cellData}`,
      as: 'a',
    }}
  />
```

## MolecularConsequenceColumn

Renders a [MolecularConsequenceCell](MolecularConsequenceCell.md). Requires the same props as [react-virtualized Column](https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md).

## PublicEvidenceColumn

Renders a [PublicEvidenceCell](PublicEvidenceCell.md). Requires the same props as [react-virtualized Column](https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md).  

### Additional Props

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| columnData | Object | ✓ |  | Object with extra props. Requires chromosomeKey, positionKey, referenceKey, alternateKey  (see below) |

#### Description of columnData keys

+ chromosomeKey (key in rowData that contains value for chromosome)
+ positionKey (key in rowData that contains value for position)
+ referenceKey (key in rowData that contains value for reference allele)
+ alternateKey (key in rowData that contains value for alternate allele)
+ hgmdKey (key in rowData that contains value for HGMD Id)
+ clinvarKey (key in rowData that contains value for ClinVar Allele Id)
+ cosmicKey (key in rowData that contains value for COSMIC Id)
+ gnomadKey (key in rowData that contains value for gnomAD AF)

#### Example

```javascript
  <PublicEvidenceColumn
    label="Evidence"
    dataKey="variant_annotation"
    width={100}
    columnData={{
      chromosomeKey: 'chromosome',
      positionKey: 'position',
      referenceKey: 'reference',
      alternateKey: 'alternate',
      hgmdKey: 'hgmd'
    }}
  />
```

## SexColumn

Renders a [SexCell](SexCell.md). Requires the same props as [react-virtualized Column](https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md).

## StatusColumn

Renders a [StatusCell](StatusCell.md). Requires the same props as [react-virtualized Column](https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md).

## TextColumn

Renders a [react-virtualized Column](https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md).

## TranscriptColumn

Renders a [TranscriptCell](TranscriptCell.md). Requires the same props as [react-virtualized Column](https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md).

## TurnAroundTimeProgressColumn

Renders a [TurnAroundTimeProgressCell](TurnAroundTimeProgressCell.md). Requires the same props as [react-virtualized Column](https://github.com/bvaughn/react-virtualized/blob/master/docs/Column.md).  

### Additional Props

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| columnData | Object | ✓ |  | Object with extra props. Requires targetKey (see below) |

#### Description of columnData keys

+ targetKey (key in rowData that contains value for target days for turn around)
+ startKey (key in rowData that contains value for start date)
+ signoutKey (key in rowData that contains value for signout date)

#### Example

```javascript
  <TurnAroundTimeProgressColumn
    label="Progress"
    dataKey="variant_annotation"
    width={100}
    columnData={{
      targetKey: 'target',
      startKey: 'start',
      signoutKey: 'signout',
    }}
  />
```
