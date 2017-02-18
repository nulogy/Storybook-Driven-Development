import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import cloneDeep from 'lodash/cloneDeep';
import RadioField from './RadioField';


export default function RadioFieldStory() {
  const options = [
    { value: 'value_a', text: 'Value A' },
    { value: 'value_b', text: 'Value B' },
    { value: 'no_text_label' },
  ];

  const disabledOptions = cloneDeep(options);
  disabledOptions[1].disabled = true;

  const props = {
    name: 'name',
    label: 'a label',
    options,
    onChange: action('onChange'),
  };

  storiesOf('❤️ RadioField', module)
    .add('default', () => (
      <RadioField {...props} />
    ))
    .add('with a value', () => (
      <RadioField {...props} value="value_b" />
    ))
    .add('one disabled', () => (
      <RadioField {...props} options={disabledOptions} />
    ))
    .add('all disabled', () => (
      <RadioField {...props} disabled />
    ));
}
