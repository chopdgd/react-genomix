BigDataTable
------------------

Uses [react-virtualized Table](https://bvaughn.github.io/react-virtualized/#/components/Table) to render large amounts of data.  We customized it here to fit our style/needs.  But essentially, its doing just using the `Table` element.

### Prop Types

Uses all the props listed for [Table](https://github.com/bvaughn/react-virtualized/blob/master/docs/Table.md) and adds a few additional ones:

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| data | Array of Objects | ✓ |  | Data to be rendered |
| loading | Boolean |  | false | If true, will render loading dimmer |
| headerTextAlign | String |  | center | Renders text centered for header |
| rowTextAlign | String |  | center | Renders text centered for header |
