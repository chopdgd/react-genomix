LinkCell
------------------

Component to render a link.  This uses [Link](Link.md), so it can be external using `<a>` or internal using something like [React Router](https://reacttraining.com/react-router/).

### Prop Types

| Property | Type | Required? | Default | Description |
|:---|:---|:---:|:---|:---|
| content | String or Element | ✓ |  | Link to click |
| as | String or Element |  |  | Can render as div or td |
| linkAs | String or Element |  | a | How to render link |
| rowIndex | Number |  |  | Row number |
