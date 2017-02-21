import React from 'react';
import { storiesOf } from '@kadira/storybook';
import keys from 'lodash/keys';
import Icon from './Icon';
import * as Icons from './icons/';

export default function IconStory() {
  storiesOf('⭐️ Icon', module)
    .add('default', () => (
      <div>
        { keys(Icons).map(icon => <p key={icon}><Icon name={icon} /> { icon } Icon</p>) }
      </div>
    ))
    .add('Size tracks surrounding text', () => (
      <div>
        { [1, 2, 3, 4].map(size => (
          <p style={{ fontSize: `${size}em` }} key={size}>
            @{size}em:
            &nbsp;
            { keys(Icons).map(icon => <Icon name={icon} key={icon} />) }
          </p>
        )) }
      </div>
    ))
    .add('inherits parent colours', () => (
      <div>
        { ['red', 'orange', 'yellow', 'green', 'blue', 'purple'].map(color =>
          <div style={{ color, fontSize: '4em' }} key={color}>
            { keys(Icons).map(icon => <Icon name={icon} key={icon} />) }
          </div>,
        )}
      </div>
    ));
}
