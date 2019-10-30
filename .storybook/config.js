import { configure, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

function loadStories() {
  require('../src/stories');
}

addParameters({
  options: {
    theme: themes.dark
  }
});

configure(loadStories, module);
