TurnAroundTimeProgressCell
--------------------------

Component to render Turn Around Time progress of a diagnostic test.  This uses [TurnAroundTimeProgress](TurnAroundTimeProgressBar.md), so the props will be passed to it.

### Prop Types

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| target | Number | ✓ |  | Number of days for target turn around. |
| start | String |  |  | Date when test started (format: YYYY-MM-DD or YYYY/MM/DD) |
| signout | String |  |  | Date when test was signed out (format: YYYY-MM-DD or YYYY/MM/DD) |
| rowIndex | Number |  |  | Row number |
| as | String or Element |  |  | Can render as div or td |
| progressProps | Object | | | Additional props to pass to [Semantic UI Progress](https://react.semantic-ui.com/modules/progress) |
