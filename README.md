A set of minimal styled components useful for providing layout in a React web app.

[Styled components](https://github.com/styled-components/styled-components) are great for isolating your CSS which makes it easier to maintain. This library provides a minimal set of styled components that are designed to be [**extended**](https://www.styled-components.com/docs/basics#extending-styles). Rather than dictating the style of your web app, these minimal components just provide a useful layout to build your web app off of.

### Example

```javascript
import React from 'react';

import { Grid, Row, Column } from 'minimal-components';

const Menu = Row.extend`
  height: 45px;
  line-height: 41px;
  background-color: #ced1d6;
`;

const Item = Column.extend`
  margin: 2px;
  cursor: pointer;
  justify-content: center;
  background-color: #ffb83f;

  &:hover {
    background-color: #ec5252;
  }

  &:active {
    color: white;
    background-color: #2955ae;
  }
`;

<Menu>
  <Item size={1}>Home</Item>
  <Item size={1}>About</Item>
  <Item size={1}>Projects</Item>
</Menu>;
```
