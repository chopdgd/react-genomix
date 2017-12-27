FixedDataTable
------------------

Uses [fixed-data-table-2 Table](http://schrodinger.github.io/fixed-data-table-2/api-table.html) to render large amounts of data.  We customized it here to fit our style/needs.  But essentially, its doing just using the `Table` element.

### Prop Types

Uses all the props listed for [Table]http://schrodinger.github.io/fixed-data-table-2/api-table.html) and adds a few additional ones:

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| data | Array of Objects | ✓ |  | Data to be rendered |
| loading | Boolean |  | false | If true, will render loading dimmer |
| headerTextAlign | String |  | center | Renders text centered for header |
| rowTextAlign | String |  | center | Renders text centered for header |
