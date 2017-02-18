import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Icon from './Icon';

export default function IconStory() {
  storiesOf('❤️ Icon', module)
    .add('default', () => (
      <Icon name="milestone" />
    ));
}
