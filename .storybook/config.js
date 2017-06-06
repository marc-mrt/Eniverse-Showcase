import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/Page.js');
}

configure(loadStories, module);
