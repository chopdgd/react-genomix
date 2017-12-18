Export Button
---------------

Button to deal with exporting data to csv file.  Uses [react-csv](http://elegance.abdennoor.com/react-csv/).

This will help you add an export button to transfer data to a CSV file that can be opened by Excel.

If you want to manipulate the data being exported, pass a custom function to the prop `onExport`.

### Prop Types

| Property | Type | Required? | Default |
|:---|:---|:---:|:---|
| data | Array of Object |  | [ ] |
| content | String or React Element |  | <Button /> |
| filenamePrefix | String |  | export |
| onExport | Function |  |  |
