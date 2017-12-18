InterpretationCell
------------------

Component to render a variant interpretation (ACMG).  Color codes based on pathogenicity.

### Prop Types

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| classification | String | ✓ | uncertain | ACMG classification. [See](#classification) |
| rowIndex | Number |  |  | Row number |
| as | String or Element |  |  | Can render as div or td |
| labelProps | Object | | | Additional props to pass to Semantic UI Label |


#### Classification

Supported values:

+ pathogenic
+ likely pathogenic
+ uncertain
+ likely benign
+ benign
