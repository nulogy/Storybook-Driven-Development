import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SelectField from './SelectField';

export default function SelectFieldStory() {
  const options = [
    { value: 'value_a', text: 'Value A' },
    { value: 'value_b', text: 'Value B' },
    { value: 'no_text_label' },
  ];
  const props = {
    label: 'a label',
    name: 'name',
    options,
    onChange: action('onChange'),
  };

  storiesOf('❤️ SelectField', module)
    .add('default', () => (
      <SelectField {...props} />
    ))
    .add('with a value', () => (
      <SelectField {...props} value="value_b" />
    ))
    .add('disabled', () => (
      <SelectField {...props} disabled />
    ))
    .add('disabled with a value', () => (
      <SelectField {...props} value="value_b" disabled />
    ));
}
