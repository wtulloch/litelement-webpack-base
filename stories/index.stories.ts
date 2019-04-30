import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';
import {PlaceholderView} from '../src/components/placeholder-view'
import { TestSlotView } from '../src/components/test-slot-view';
import '../src/components/test-slot-view';


const dummyMarkdown = '## Test markdown';

storiesOf('Basic', module)
  .addDecorator(withKnobs)
 
  .add(
    'Headers',
    () => html`
      <h1>Top header</h1>
    `,
  )
  .add('Test', () => withClassPropertiesKnobs(PlaceholderView), {notes: {markdown: dummyMarkdown}})
  .add('slot', () => html `
    <testslot-view>
    <h4>Slot view</h4>
      <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </testslot-view>
  `);