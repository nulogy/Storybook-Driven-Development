import React from 'react';
import { storiesOf } from '@kadira/storybook';
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

const boxStyle = (isInverse, border) => {
  let style = {
    textAlign: 'center',
    color: 'black',
    padding: '2rem',
    height: '6rem',
    marginBottom: '2rem',
  };
  if (isInverse === true) {
    style = Object.assign(style, { color: 'white' });
  }
  if (border === true) {
    style = Object.assign(style, {
      borderStyle: 'solid',
      borderWidth: '.4rem',
    });
  }
  return style;
};
const Box = ({ className, inverse = false, border = false }) => (
  <div className={colours[className]} style={boxStyle(inverse, border)}>{className}</div>
);

Box.propTypes = {
  className: React.PropTypes.string.isRequired,
  inverse: React.PropTypes.bool,
  border: React.PropTypes.bool,
};

export default function ColoursStory() {
  storiesOf('⭐️ Colours', module)
    .add('text colours', () => (
      <div>
        <Text className="colour__text__black" />
        <Text className="colour__text__greyDark" />
        <Text className="colour__text__grey" />
        <Text className="colour__text__greyLight" />
        <Text className="colour__text__white" inverse />
        <Text className="colour__text__blue" />
        <Text className="colour__text__blueLight" />
      </div>
    ))
    .add('backgrounds', () => (
      <div>
        <Box className="colour__background__black" inverse />
        <Box className="colour__background__greyDark" inverse />
        <Box className="colour__background__grey" inverse />
        <Box className="colour__background__greyLight" inverse />
        <Box className="colour__background__white" />
        <Box className="colour__background__blue" inverse />
        <Box className="colour__background__blueLight" inverse />
      </div>
    ))
    .add('borders', () => (
      <div>
        <Box className="colour__border__black" border />
        <Box className="colour__border__greyDark" border />
        <Box className="colour__border__grey" border />
        <Box className="colour__border__greyLight" border />
        <Box className="colour__border__white" border />
        <Box className="colour__border__blue" border />
        <Box className="colour__border__blueLight" border />
      </div>
    ));
}
