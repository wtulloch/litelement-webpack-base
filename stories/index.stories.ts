import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';
import {PlaceholderView} from '../src/components/placeholder-view'


const dummyMarkdown = '## Test markdown';

storiesOf('Basic', module)
  .addDecorator(withKnobs)
 
  .add(
    'Headers',
    () => html`
      <h1>Top header</h1>
    `,
  )
  .add('Test', () => withClassPropertiesKnobs(PlaceholderView), {notes: {markdown: dummyMarkdown}});