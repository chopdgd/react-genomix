AutoCompleteDropDown
--------------------

Dropdown to allow for autocomplete.  This will retrieve options remotely (API endpoint).  The goal is to use this in combination with Redux. The prop `options` should be

### Prop Types

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| onChange | Function | ✓ |  | Callback for changes when values are selected |
| searchAction | Function | ✓ |  | Callback for handle typing in search box |
| endpoint | String | ✓ |  | URL to search for more options |
| waitInterval | Number |  | 750 | How long before searching API for more options |
| loading | Boolean |  | false | Are more options loading? |
| options | Array of Object |  | [ ] | Options for drop down.  See Semantic UI [shorthand](https://react.semantic-ui.com/modules/dropdown#dropdown-example-search-in-menu) |
