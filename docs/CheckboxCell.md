CheckboxCell
------------

Component to render a Checkbox within a Table cell

### Prop Types

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| onChange | Function | ✓ |  | Callback to send the rowIndex that was changed |
| rowIndex | Number | ✓ |  | Row number |
| as | String or Element |  |  | Can render as div or td |
| checked | Array |  |  | Array of values that have been checked.  This determines which rows should be checked/unchecked |
