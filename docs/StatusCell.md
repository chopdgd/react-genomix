StatusCell
------------------

Component to render a table cell to display a status

### Prop Types

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| status | String | ✓ |  | Sex. [See](#status) |
| rowIndex | Number |  |  | Row number |
| as | String or Element |  |  | Can render as div or td |


#### Status

Currently supported statuses:

+ pending
+ running
+ complete
+ cancelled
+ failed
+ unknown

Anything else, will default to unknown
