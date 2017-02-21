import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Form from './Form';

export default function FormStory() {
  const props = {
    intervalName: '',
    startMilestone: '',
    endMilestone: '',
    handleChange: action('handleChange'),
  };

  storiesOf('Interval Form', module)
    .add('default', () => (
      <Form {...props} />
    ));
}
