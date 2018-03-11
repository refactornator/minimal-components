import React from 'react';

import { storiesOf } from '@storybook/react';

import { Grid, Row, Column } from '../index';

storiesOf('Grid', module).add('with 3 rows', () => (
  <Grid>
    <Row>
      <Column size={8}>Header</Column>
    </Row>
    <Row grow>
      <Column size={1}>Left Side Menu</Column>
      <Column size={5}>Content</Column>
      <Column size={2}>Right Side Menu</Column>
    </Row>
    <Row>
      <Column size={8}>Footer</Column>
    </Row>
  </Grid>
));
