import React, { PropTypes } from 'react';
import { storiesOf } from '@kadira/storybook';
import lists from './Lists.css';

const UList = ({ className = '' }) => (
  <ul className={className}>
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>
  </ul>
);
UList.propTypes = { className: PropTypes.string };

export default function ListsStory() {
  storiesOf('✨ Lists', module)
    .add('default', () => (
      <UList />
    ))
    .add('reset', () => (
      <UList className={lists.reset} />
    ));
}
