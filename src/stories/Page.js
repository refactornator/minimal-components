import React from 'react';

import { storiesOf } from '@storybook/react';

import { Grid, Row, Column } from '../index';

const Container = Grid.extend`
  color: white;
  background-color: #ced1d6;
`;

const centeredNoFlex = `
  flex: initial;
  align-items: center;
  justify-content: center;
`;

const Header = Row.extend`
  color: black;
  height: 80px;
  background-color: #f99645;
  ${centeredNoFlex};
`;

const Footer = Row.extend`
  height: 60px;
  background-color: #2955ae;
  ${centeredNoFlex};
`;

const Main = Row.extend`
  flex: 1 1 auto;
`;

const LeftSideMenu = Column.extend`
  padding: 8px 16px;
  background-color: #829fd9;
`;

const Content = Column.extend`
  padding: 8px 16px;
  background-color: #366ddc;
`;

const RightSideMenu = Column.extend`
  padding: 8px 16px;
  background-color: #00527e;
`;

storiesOf('Page', module).add('basic layout', () => (
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
