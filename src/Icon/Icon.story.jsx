import React, { PropTypes } from 'react';
import { storiesOf } from '@kadira/storybook';
import keys from 'lodash/keys';
import Icon from './Icon';
import * as Icons from './icons/';

const Mount = ({ name, color = 'inherit' }) => <p style={{ color }}><Icon name={name} /> { name } Icon</p>;
Mount.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default function IconStory() {
  storiesOf('❤️ Icon', module)
    .add('default', () => (
      <div>
        { keys(Icons).map(icon => <Mount name={icon} />) }
      </div>
    ))
    .add('Size tracks surrounding text', () => (
      <div>
        { [1, 2, 3, 4].map(size => (
          <p style={{ fontSize: `${size}em` }}>
            @{size}em:
            &nbsp;
            { keys(Icons).map(icon => <Icon name={icon} />) }
          </p>
        )) }
      </div>
    ))
    .add('inherits parent colours', () => (
      <div>
        { ['red', 'orange', 'yellow', 'green', 'blue', 'purple'].map(color =>
          <div style={{ color, fontSize: '4em' }}>
            { keys(Icons).map(icon => <Icon name={icon} />) }
          </div>,
        )}
      </div>
    ));
}
