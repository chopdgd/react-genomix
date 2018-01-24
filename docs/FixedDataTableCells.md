Customized Cells for Fixed Data Table
-------------------------------------

We are using [fixed-data-table-2](http://schrodinger.github.io/fixed-data-table-2/) to render tables with large amounts of data.  As part of this, we customized a number of unique cells (some specific for genomics) that we can use right out of the box.  They are listed below:

+ [CheckboxFixedCell](#checkboxfixedcell)
+ [DateFixedCell](#datefixedcell)
+ [DropdownFixedCell](#dropdownfixedcell)
+ [GeneFixedCell](#genefixedcell)
+ [InterpretationFixedCell](#interpretationfixedcell)
+ [LinkFixedCell](#linkfixedcell)
+ [MolecularConsequenceFixedCell](#molecularconsequencefixedcell)
+ [PublicEvidenceFixedCell](#publicevidencefixedcell)
+ [SexFixedCell](#sexfixedcell)
+ [StatusFixedCell](#statusfixedcell)
+ [TextFixedCell](#textfixedcell)
+ [TranscriptFixedCell](#transcriptfixedcell)
+ [TurnAroundTimeProgressFixedCell](#turnaroundtimeprogressfixedcell)

## CheckboxFixedCell

Renders a [Cell](http://schrodinger.github.io/fixed-data-table-2/api-cell.html) with a [Checkbox](https://react.semantic-ui.com/modules/checkbox). Requires the same props listed [here](http://schrodinger.github.io/fixed-data-table-2/api-cell.html).  

### Additional Props

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| data | Array of Objects |  |  | Data to be rendered |
| onChange | Function | ✓ |  | Callback to deal with change |

#### Example

```javascript
  <CheckboxFixedCell
    data={[]}
    onChange={(props) => alert(JSON.stringify(props))}
  />
```

## DateFixedCell

[Cell](http://schrodinger.github.io/fixed-data-table-2/api-cell.html) with a date normalized to format MM/DD/YYYY. Requires the same props listed [here](http://schrodinger.github.io/fixed-data-table-2/api-cell.html).

### Additional Props

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| data | Array of Objects |  |  | Data to be rendered |

## DropdownFixedCell

Renders a [Cell](http://schrodinger.github.io/fixed-data-table-2/api-cell.html) with a [Dropdown](https://react.semantic-ui.com/modules/dropdown). Requires the same props listed [here](http://schrodinger.github.io/fixed-data-table-2/api-cell.html).  

### Additional Props

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| data | Array of Objects |  |  | Data to be rendered |
| onChange | Function | ✓ |  | Callback to deal with change |

#### Example

```javascript
  <DropdownFixedCell
    data={[]}
    onChange={(props) => alert(JSON.stringify(props))}
  />
```

## GeneFixedCell

[Cell](http://schrodinger.github.io/fixed-data-table-2/api-cell.html) with a gene symbol and links to HGMD, OMIM, and PubMed. Requires the same props listed [here](http://schrodinger.github.io/fixed-data-table-2/api-cell.html).

### Additional Props

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| data | Array of Objects |  |  | Data to be rendered |

## InterpretationFixedCell

[Cell](http://schrodinger.github.io/fixed-data-table-2/api-cell.html) with a color coded classification according to ACMG. Requires the same props listed [here](http://schrodinger.github.io/fixed-data-table-2/api-cell.html).  

### Additional Props

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| data | Array of Objects |  |  | Data to be rendered |

## LinkFixedCell

[Cell](http://schrodinger.github.io/fixed-data-table-2/api-cell.html) with a hyperlink. Requires the same props listed [here](http://schrodinger.github.io/fixed-data-table-2/api-cell.html).

### Additional Props

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| as | Func/String |  | a | How to render the link. |
| data | Array of Objects |  |  | Data to be rendered |
| idKey | String |  |  | If you want to pass a different key to the urlBuilder |
| urlBuilder | Function | ✓ |  | Function to build URL |

#### Example

```javascript
  <LinkFixedCell
    data={[]}
    urlBuilder={(data) => `https://www.google.com/search?q=${data}`}
    as="a"
  />
```

## MolecularConsequenceFixedCell

[Cell](http://schrodinger.github.io/fixed-data-table-2/api-cell.html) with a color coded sequence ontology term.  See [here](https://useast.ensembl.org/info/genome/variation/predicted_data.html) for rankings. Requires the same props listed [here](http://schrodinger.github.io/fixed-data-table-2/api-cell.html).

### Additional Props

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| data | Array of Objects |  |  | Data to be rendered |

## PublicEvidenceFixedCell

[Cell](http://schrodinger.github.io/fixed-data-table-2/api-cell.html) with stars highlighting what public evidence is available.  Includes hyperlinks to COSMIC, HGMD, ClinVar, gnomAD if data exists. Requires the same props listed [here](http://schrodinger.github.io/fixed-data-table-2/api-cell.html).

### Additional Props

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| data | Array of Objects |  |  | Data to be rendered |
| chromosomeKey | String | ✓ |  | Key for chromosome in data |
| positionKey | String | ✓ |  | Key for position in data |
| referenceKey | String | ✓ |  | Key for reference allele in data |
| alternateKey | String | ✓ |  | Key for alternate allele in data |
| hgmdKey | String |  |  | Key for HGMD entry Id |
| clinvarKey | String |  |  | Key for ClinVar Allele Id |
| cosmicKey | String |  |  | Key for COSMIC entry Id |
| gnomadKey | String |  |  | Key for gnomAD Allele Frequency (AF) |

#### Example

```javascript
  <PublicEvidenceFixedCell
    data={[]}
    chromosomeKey="chromosome"
    positionKey="position"
    referenceKey="reference"
    alternateKey="alternate"
    hgmdKey="hgmd"
  />
```

## SexFixedCell

[Cell](http://schrodinger.github.io/fixed-data-table-2/api-cell.html) with an icon that represents sex. Requires the same props listed [here](http://schrodinger.github.io/fixed-data-table-2/api-cell.html).

### Additional Props

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| data | Array of Objects |  |  | Data to be rendered |

## StatusFixedCell

[Cell](http://schrodinger.github.io/fixed-data-table-2/api-cell.html) with an icon that represents status. Requires the same props listed [here](http://schrodinger.github.io/fixed-data-table-2/api-cell.html).

### Note

By default, status will render unknown, but accepts the following values:

+ pending
+ running
+ complete
+ cancelled
+ failed

### Additional Props

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| data | Array of Objects |  |  | Data to be rendered |

## TextFixedCell

[Cell](http://schrodinger.github.io/fixed-data-table-2/api-cell.html) with text. Requires the same props listed [here](http://schrodinger.github.io/fixed-data-table-2/api-cell.html).

### Additional Props

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| data | Array of Objects |  |  | Data to be rendered |

## TranscriptFixedCell

[Cell](http://schrodinger.github.io/fixed-data-table-2/api-cell.html) with transcript and a link to an internal Alamut resource. Requires the same props listed [here](http://schrodinger.github.io/fixed-data-table-2/api-cell.html).

### Additional Props

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| data | Array of Objects |  |  | Data to be rendered |

## TurnAroundTimeProgressFixedCell

[Cell](http://schrodinger.github.io/fixed-data-table-2/api-cell.html) with a progress bar that details information for turn around time for a diagnostic test. Requires the same props listed [here](http://schrodinger.github.io/fixed-data-table-2/api-cell.html).

### Additional Props

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| data | Array of Objects |  |  | Data to be rendered |
| targetKey | String | ✓ |  | Key for target (# of days) turn around time |
| startKey | String |  |  | Key for start date of test |
| signoutKey | String |  |  | Key for signout date of test |


#### Example

```javascript
  <TurnAroundTimeProgressFixedCell
    data={[]}
    targetKey="target"
    startKey="start"
    signoutKey="signout"
  />
```
