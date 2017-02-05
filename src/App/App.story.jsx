import React from 'react';
import { storiesOf } from '@kadira/storybook';
import App from './App';

export default function AppStory() {
  storiesOf('App', module)
    .add('', () => (
      <App />
    ));
}
