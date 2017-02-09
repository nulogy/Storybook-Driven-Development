import React from 'react';
import { storiesOf } from '@kadira/storybook';
import '~/index.css';
import Form from './Form';

export default function FormStory() {
  storiesOf('Interval Form', module)
    .add('', () => (
      <Form />
    ));
}
