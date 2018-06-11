GeneCell
------------

Component to render a gene cell within a Table.  This includes links to popular resources like HGMD, OMIM, and PubMed.

### Prop Types

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| genes | Array | ✓ |  | Array of Objects (e.g. - [{symbol: 'MFN2', ensemblId: 'ENG011'}]) |
| rowIndex | Number |  |  | Row number |
| as | String or Element |  |  | Can render as div or td |
