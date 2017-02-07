import React from 'react';
import { storiesOf } from '@kadira/storybook';
import TextField from './TextField';

export default function TextFieldStory() {
  storiesOf('TextField', module)
    .add('default', () => (
      <TextField name="name" label="a label" />
    ))
    .add('with a value', () => (
      <TextField name="name" label="a label" value="some value" />
    ))
    .add('with a placeholder', () => (
      <TextField name="name" label="a label" placeholder="this is a placeholder" />
    ))
    .add('disabled', () => (
      <TextField name="name" label="a label" disabled />
    ))
    .add('disabled with a value', () => (
      <TextField name="name" label="a label" value="some value" disabled />
    ))
    .add('disabled with a placeholder', () => (
      <TextField name="name" label="a label" placeholder="this is a placeholder" disabled />
    ));
}
