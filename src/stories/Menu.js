import React from 'react';

import { storiesOf } from '@storybook/react';

import { Grid, Row, Column } from '../index';

const Menu = Row.extend`
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

storiesOf('Menu', module)
  .add('horizontal menu', () => (
    <Menu style={{ height: 45 }}>
      <Item size={1}>Home</Item>
      <Item size={1}>About</Item>
      <Item size={1}>Projects</Item>
    </Menu>
  ))
  .add('vertical menu', () => (
    <Menu style={{ flex: '0 142px', flexDirection: 'column' }}>
      <Item size={1}>Home</Item>
      <Item size={1}>About</Item>
      <Item size={1}>Projects</Item>
    </Menu>
  ));
