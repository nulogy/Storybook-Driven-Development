import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import cloneDeep from 'lodash/cloneDeep';
import ToggleGroup from './ToggleGroup';

export default function ToggleGroupStory() {
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

  storiesOf('⭐️ ToggleGroup', module)
  .add('default', () => (
    <ToggleGroup {...props} />
  ))
  .add('with a value', () => (
    <ToggleGroup {...props} value="value_b" />
  ))
  .add('all disabled', () => (
    <ToggleGroup {...props} disabled />
  ))
  .add('one disabled', () => (
    <ToggleGroup {...props} options={disabledOptions} />
  ))
  .add('all disabled with a value', () => (
    <ToggleGroup {...props} value="no_text_label" disabled />
  ))
  .add('one disabled, another with a value', () => (
    <ToggleGroup {...props} value="no_text_label" options={disabledOptions} />
  ))
  .add('one disabled with a value', () => (
    <ToggleGroup {...props} value="value_b" options={disabledOptions} />
  ));
}
