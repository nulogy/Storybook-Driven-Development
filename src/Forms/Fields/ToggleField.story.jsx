import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import cloneDeep from 'lodash/cloneDeep';
import ToggleField from './ToggleField';


export default function ToggleFieldStory() {
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

  storiesOf('❤️ ToggleField', module)
    .add('default', () => (
      <ToggleField {...props} />
    ))
    .add('with a value', () => (
      <ToggleField {...props} value="value_b" />
    ))
    .add('one disabled', () => (
      <ToggleField {...props} options={disabledOptions} />
    ))
    .add('all disabled', () => (
      <ToggleField {...props} disabled />
    ));
}
