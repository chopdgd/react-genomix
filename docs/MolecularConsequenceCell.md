MolecularConsequenceCell
------------------

Component to render a molecular consequence data point.  It tries to highlight more severe changes to catch the attention of the user.

### Prop Types

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| consequence | String | ✓ |  | Consequence. [See](#consequence) |
| rowIndex | Number |  |  | Row number |
| as | String or Element |  |  | Can render as div or td |
| labelProps | Object | | | Additional props to pass to Semantic UI Label |


#### Consequence

This will try to assign a color based on the severity of the change.  Currently you can expect the following:

+ `frameshift`, `start`, `stop` variants to be labeled red
+ `missense` variants to be labeled orange
+ `splice` variants to be labeled blue
+ `insertions`, `deletions` variants to be labeled black
+ everything else will default to grey
