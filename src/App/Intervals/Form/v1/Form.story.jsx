import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Form from './Form';
import FormController from '../FormController';

export default function FormStory() {
  const props = {
    intervalName: '',
    startMilestone: '',
    endMilestone: '',
    handleChange: action('handleChange'),
  };

  storiesOf('Interval Form - v1', module)
    .add('default', () => (
      <Form {...props} />
    ))
    .add('interactive with Form Controller', () => (
      <FormController>
        <Form />
      </FormController>
    ));
}
