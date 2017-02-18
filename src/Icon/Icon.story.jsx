import React, { PropTypes } from 'react';
import { storiesOf } from '@kadira/storybook';
import Icon from './Icon';

const Mount = ({ name }) => <p><Icon name={name} /> { name } Icon</p>;
Mount.PropTypes = { name: PropTypes.string };

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
    ));
}
