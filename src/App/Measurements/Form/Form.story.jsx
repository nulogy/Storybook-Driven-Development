import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Form from './Form';
import FormController from './FormController';

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
    ))
    .add('interactive with Form Controller', () => (
      <FormController>
        <Form />
      </FormController>
    ));
}
