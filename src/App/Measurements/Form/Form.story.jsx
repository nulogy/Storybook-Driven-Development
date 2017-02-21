import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Form from './Form';
import FormController from './FormController';

export default function FormStory() {
  const props = {
    intervalName: '',
    startMilestone: '',
    endMilestone: '',
    measurementType: '',
    handleChange: action('handleChange'),
  };

  storiesOf('Measurement Form', module)
    .add('default', () => (
      <Form {...props} />
    ))
    .add('Interval selected', () => (
      <Form {...props} measurementType="interval" />
    ))
    .add('Milestone selected', () => (
      <Form {...props} measurementType="milestone" />
    ))
    .add('interactive with Form Controller', () => (
      <FormController>
        <Form />
      </FormController>
    ));
}
