import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Nav from './Nav';

export default function NavStory() {
  storiesOf('Nav', module)
    .add('default', () => (
      <Nav />
    ))
    .add('with a value', () => (
      <Nav value="/home" />
    ))
    .add('with other options', () => (
      <Nav
        options={[
          { value: "/home", text: "Home" },
          { value: "/edit", text: "Edit" },
        ]}
      />
    ));
}
