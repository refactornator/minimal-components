import React from 'react';

import { storiesOf } from '@storybook/react';

import { Grid, Row, Column } from '../index';

const Container = Grid.extend``;

const Header = Row.extend`
  height: 120px;
  background: rgba(255, 0, 0, 0.1);
`;

const Main = Row.extend`
  flex: 1 1 auto;
  background: rgba(0, 0, 255, 0.1);
`;

const Footer = Row.extend`
  height: 120px;
  background: rgba(0, 255, 0, 0.1);
`;

const LeftSideMenu = Column.extend`
  background: red;
`;

const Content = Column.extend`
  background: green;
`;

const RightSideMenu = Column.extend`
  background: yellow;
`;

storiesOf('Grid', module).add('with 3 rows', () => (
  <Container>
    <Header>Header</Header>
    <Main>
      <LeftSideMenu size={1}>Left Side Menu</LeftSideMenu>
      <Content size={5}>Content</Content>
      <RightSideMenu size={2}>Right Side Menu</RightSideMenu>
    </Main>
    <Footer>Footer</Footer>
  </Container>
));
