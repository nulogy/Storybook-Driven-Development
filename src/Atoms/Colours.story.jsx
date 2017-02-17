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
        <Text className="colour__text_black" />
        <Text className="colour__text_greyDark" />
        <Text className="colour__text_grey" />
        <Text className="colour__text_greyLight" />
        <Text className="colour__text_white" inverse />
        <Text className="colour__text_blue" />
        <Text className="colour__text_blueLight" />
      </div>
    ))
    .add('backgrounds', () => (
      <div>
        <Box className="colour__background_black" inverse />
        <Box className="colour__background_greyDark" inverse />
        <Box className="colour__background_grey" inverse />
        <Box className="colour__background_greyLight" inverse />
        <Box className="colour__background_white" />
        <Box className="colour__background_blue" inverse />
        <Box className="colour__background_blueLight" inverse />
      </div>
    ))
    .add('borders', () => (
      <div>
        <Box className="colour__border_black" border />
        <Box className="colour__border_greyDark" border />
        <Box className="colour__border_grey" border />
        <Box className="colour__border_greyLight" border />
        <Box className="colour__border_white" border />
        <Box className="colour__border_blue" border />
        <Box className="colour__border_blueLight" border />
      </div>
    ));
}
