import { configure } from '@storybook/polymer';
import '@storybook/addon-console';
import '../src/assets/main.css';

const req = require.context('../stories', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);