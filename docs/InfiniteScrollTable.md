## InfiniteScrollTable

Uses [fixed-data-table-2 Table](http://schrodinger.github.io/fixed-data-table-2/api-table.html) to render large amounts of data. We customized it here to fit our style/needs. But essentially, its doing just using the `Table` element.

### Prop Types

Uses all the props listed for [Table](http://schrodinger.github.io/fixed-data-table-2/api-table.html) and adds a few additional ones:

| Property        | Type             | Required? | Default | Description                                                             |
| :-------------- | :--------------- | :-------: | :------ | :---------------------------------------------------------------------- |
| columnOrder     | Array of String  |     ✓     |         | columnKeys in order they should be rendered                             |
| onColumnReorder | Function         |           |         | Optional callback that will be called with new column order             |
| columnWidths    | Objects          |     ✓     |         | Keys should be columnKeys and value should be pixels for initial widths |
| onResizeColumn  | Function         |           |         | Optional callback that will be called with new column widths            |
| fixedColumns    | Array of String  |           |         | columnKeys that should be fixed during scrolling                        |
| hasNextPage     | Boolean          |           |         | boolean that notifies if there is more data to fetch                    |
| loading         | Boolean          |           |         | boolean that notifies if data is currently being fetched                |
| rows            | Array of Objects |           |         | Array of data elements for the table (rows)                             |
| pixelsRefetch   | Integer          |           |         | number of pixels left to reach bottom of rows to trigger refetch        |
| yOffset         | Integer          |           |         | number of pixels to offset y axis                                       |
| onFetch         | Function         |           |         | Callback used to request more data                                      |
| onScrollEnd     | Function         |           |         | Callback used once user stops scrolling                                 |
