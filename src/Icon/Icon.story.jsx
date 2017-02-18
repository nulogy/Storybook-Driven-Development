import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Icon from './Icon';

export default function IconStory() {
  storiesOf('❤️ Icon', module)
    .add('default', () => (
      <div>
        <Icon name="Milestone" />
        <Icon name="Interval" />
      </div>
    ))
    .add('Icrease size by increasing parent size', () => (
      <div>
        { [1, 2, 3, 4].map( size => (
          <p style={{fontSize: `${size}em`}}>
            font-size: {size}em
            <Icon name="Milestone" />
            <Icon name="Interval" />
          </p>
        )) }
      </div>
    ));
}
