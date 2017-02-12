import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Form from './Form';

export default function FormStory() {
  storiesOf('Measurement Form', module)
    .add('default', () => (
      <Form />
    ))
    .add('Milestone selected', () => (
      <Form measurementType="milestone" />
    ))
    .add('Interval selected', () => (
      <Form measurementType="interval" />
    ));
}
