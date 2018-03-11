import { configure } from '@storybook/react';
import { injectGlobal } from 'styled-components';

injectGlobal`
  #root {
    width: 100%;
    height: 100%;
    display: flex;
  }
`;

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
