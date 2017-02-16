import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Link from './Link';

export default function LinkStory() {
  storiesOf('❤️ Link', module)
    .add('with a string href', () => (
      <p>This is <Link to="http://theinterned.net">a link</Link> with a text `to` prop.</p>
    ))
    .add('with a click handler', () => (
      <p>This is <Link to={action('to click')}>a link</Link> with a callback `to` prop.</p>
    ));
}
