import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Button from './Button';

export default function ButtonStory() {
  const props = {
    name: 'button',
  };

  storiesOf('❤️ Button', module)
    .add('default', () => (
      <Button {...props}>Click me</Button>
    ))
    .add('submit', () => (
      <Button {...props} submit>Submit me</Button>
    ))
    .add('disabled', () => (
      <Button {...props} disabled>Click me</Button>
    ))
    .add('disabled submit', () => (
      <Button {...props} submit disabled>Submit me</Button>
    ));
}
