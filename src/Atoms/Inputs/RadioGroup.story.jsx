import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import cloneDeep from 'lodash/cloneDeep';
import RadioGroup from './RadioGroup';

export default function RadioGroupStory() {
  const options = [
    { value: 'value_a', text: 'Value A' },
    { value: 'value_b', text: 'Value B' },
    { value: 'no_text_label' },
  ];

  const disabledOptions = cloneDeep(options);
  disabledOptions[1].disabled = true;

  const props = {
    name: 'name',
    options,
    onChange: action('onChange'),
  };

  storiesOf('⭐️ RadioGroup', module)
  .add('default', () => (
    <RadioGroup {...props} />
  ))
  .add('with a value', () => (
    <RadioGroup {...props} value="value_b" />
  ))
  .add('all disabled', () => (
    <RadioGroup {...props} disabled />
  ))
  .add('one disabled', () => (
    <RadioGroup {...props} options={disabledOptions} />
  ))
  .add('all disabled with a value', () => (
    <RadioGroup {...props} value="no_text_label" disabled />
  ))
  .add('one disabled with a value', () => (
    <RadioGroup {...props} value="no_text_label" options={disabledOptions} />
  ));
}
