import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Box from '~/utils/Box';
import colours from './Colours.css';

const textStyle = isInverse => (isInverse ? { backgroundColor: 'black' } : null);

const Text = ({ className, inverse = false }) => (
  <p
    className={colours[className]}
    style={textStyle(inverse)}
  >{className}</p>
);
Text.propTypes = {
  className: React.PropTypes.string.isRequired,
  inverse: React.PropTypes.bool,
};

export default function ColoursStory() {
  storiesOf('✨ Colours', module)
    .add('text colours', () => (
      <div>
        <Text className="text__black" />
        <Text className="text__greyDark" />
        <Text className="text__grey" />
        <Text className="text__greyLight" />
        <Text className="text__white" inverse />
        <Text className="text__blue" />
        <Text className="text__blueLight" />
      </div>
    ))
    .add('backgrounds', () => (
      <div>
        <Box demo={colours} className="background__black" inverse />
        <Box demo={colours} className="background__greyDark" inverse />
        <Box demo={colours} className="background__grey" inverse />
        <Box demo={colours} className="background__greyLight" inverse />
        <Box demo={colours} className="background__white" />
        <Box demo={colours} className="background__blue" inverse />
        <Box demo={colours} className="background__blueLight" inverse />
      </div>
    ))
    .add('borders', () => (
      <div>
        <Box demo={colours} className="border__black" borders />
        <Box demo={colours} className="border__greyDark" borders />
        <Box demo={colours} className="border__grey" borders />
        <Box demo={colours} className="border__greyLight" borders />
        <Box demo={colours} className="border__white" borders />
        <Box demo={colours} className="border__blue" borders />
        <Box demo={colours} className="border__blueLight" borders />
      </div>
    ))
    .add('outlines', () => (
      <div>
        <Box demo={colours} className="outline__blue" borders />
        <Box demo={colours} className="outline__blue__hover" borders />
      </div>
    ));
}
