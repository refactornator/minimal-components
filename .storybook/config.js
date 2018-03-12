import { configure } from '@storybook/react';
import { setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
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

setAddon(JSXAddon);
configure(loadStories, module);
