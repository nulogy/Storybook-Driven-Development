import React from 'react';
import { storiesOf } from '@kadira/storybook';
import App from './App';

export default function AppStory() {
  storiesOf('App', module)
    .add('default: v3 form', () => (
      <App />
    ))
    .add('v1 form', () => (
      <App formVersion={1} />
    ))
    .add('v2 form', () => (
      <App formVersion={2} />
    ));
}
