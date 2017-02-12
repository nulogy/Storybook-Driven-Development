import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Form from './Form';

export default function FormStory() {
  storiesOf('Measurement Form', module)
    .add('default', () => (
      <Form />
    ))
    .add('Interval selected', () => (
      <Form measurementType="interval" />
    ))
    .add('Milestone selected', () => (
      <Form measurementType="milestone" />
    ));
}
