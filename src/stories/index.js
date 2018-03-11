import React from 'react';

import { storiesOf } from '@storybook/react';

import Box from '../Box';

storiesOf('Box', module).add('with border', () => (
  <Box>Just a generic box to put stuff in.</Box>
));
