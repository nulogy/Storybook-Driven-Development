import React from 'react';
import { storiesOf } from '@kadira/storybook';
import colours from './Colours.css';

const Text = ({className, inverse = false}) => (
  <p
    className={colours[className]}
    style={inverse ? {"backgroundColor": "#444"} : null}
  >{className}</p>);

export default function ColoursStory() {
  storiesOf('Colours', module)
    .add('text colours', () => (
      <div>
        <Text className="colour__text--black" />
        <Text className="colour__text--grey-dark" />
        <Text className="colour__text--grey" />
        <Text className="colour__text--grey-light" />
        <Text className="colour__text--white" inverse />
        <Text className="colour__text--blue" />
      </div>
    ));
}
