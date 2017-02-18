import React, { PropTypes } from 'react';
import { storiesOf } from '@kadira/storybook';
import Icon from './Icon';

const Mount = ({ name, color = "inherit" }) => <p style={{ color }}><Icon name={name} /> { name } Icon</p>;
Mount.PropTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default function IconStory() {
  storiesOf('❤️ Icon', module)
    .add('default', () => (
      <div>
        <Mount name="Milestone" />
        <Mount name="Interval" />
      </div>
    ))
    .add('Size tracks surrounding text', () => (
      <div>
        { [1, 2, 3, 4].map(size => (
          <p style={{ fontSize: `${size}em` }}>
            <Icon name="Milestone" />
            <Icon name="Interval" />
            &nbsp;
            font-size: {size}em
          </p>
        )) }
      </div>
    ))
    .add('inherits parent colours', () => (
      <div>
        { ["red", "orange", "yellow", "green", "blue", "purple"].map(color =>
          <Mount name="Interval" color={color} />
        )}
      </div>
    ));
}
