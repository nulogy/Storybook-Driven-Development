import React from 'react';
import { storiesOf } from '@kadira/storybook';
import RadioField from './RadioField';

const options = [
  { value: 'value_a', text: 'Value A' },
  { value: 'value_b', text: 'Value B' },
  { value: 'no_text_label' },
];

const disabledOptions = options.map(({value, text}) => ({value, text, disabled: true}));

const props = {
  label: 'a label',
  name: 'name',
  value: 'value',
  options,
};

export default function RadioFieldStory() {
  storiesOf('❤️ RadioField', module)
    .add('default', () => (
      <RadioField {...props} />
    ))
    .add('with a value', () => (
      <RadioField {...props} value='value_b' />
    ))
    .add('disabled', () => (
      <RadioField {...props} options={disabledOptions} />
    ))
    .add('disabled with a value', () => (
      <RadioField {...props} value='value_b' options={disabledOptions} />
    ));
}
