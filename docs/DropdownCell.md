DropdownCell
------------

Component to render a Dropdown within a Table cell

### Prop Types

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| name | String | ✓ |  | Name of field |
| rowIndex | Number | ✓ |  | Row number |
| options | Array of Object |  | [ ] | Options for drop down.  See Semantic UI [shorthand](https://react.semantic-ui.com/modules/dropdown#dropdown-example-search-in-menu) |
| onChange | Function | ✓ |  | Callback to send the rowIndex that was changed |
| as | String or Element |  |  | Can render as div or td |
| dropDownProps | Object | | | Additional props to pass to [Semantic UI Dropdown](https://react.semantic-ui.com/modules/dropdown) |
