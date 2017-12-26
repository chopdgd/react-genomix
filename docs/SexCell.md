SexCell
------------------

Component to render a table cell to display sex of a patient/sample.

### Prop Types

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| sex | String | ✓ |  | Sex. [See](#sex) |
| rowIndex | Number |  |  | Row number |
| as | String or Element |  |  | Can render as div or td |
| iconProps | Object | | | Additional props to pass to Semantic UI Icon |


#### Sex

Will try to guess the sex by using accepting the following:

+ to render male use: `m`, `male`, or `1`
+ to render female use: `f`, `female`, or `2`
+ everything else will render as unknown
