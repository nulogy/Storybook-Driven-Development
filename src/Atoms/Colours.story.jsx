import React from 'react';
import { storiesOf } from '@kadira/storybook';
import colours from './Colours.css';

const textStyle = isInverse => isInverse ? { backgroundColor: 'black' } : null;
const Text = ({ className, inverse = false }) => (
  <p
    className={colours[className]}
    style={textStyle(inverse)}
  >{className}</p>);

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
  <div className={colours[className]} style={boxStyle(inverse, border)}>{className}</div>);

export default function ColoursStory() {
  storiesOf('⭐️ Colours', module)
    .add('text colours', () => (
      <div>
        <Text className="colour__text--black" />
        <Text className="colour__text--grey-dark" />
        <Text className="colour__text--grey" />
        <Text className="colour__text--grey-light" />
        <Text className="colour__text--white" inverse />
        <Text className="colour__text--blue" />
        <Text className="colour__text--blue-light" />
      </div>
    ))
    .add('backgrounds', () => (
      <div>
        <Box className="colour__background--black" inverse />
        <Box className="colour__background--grey-dark" inverse />
        <Box className="colour__background--grey" inverse />
        <Box className="colour__background--grey-light" inverse />
        <Box className="colour__background--white" />
        <Box className="colour__background--blue" inverse />
        <Box className="colour__background--blue-light" inverse />
      </div>
    ))
    .add('borders', () => (
      <div>
        <Box className="colour__border--black" border />
        <Box className="colour__border--grey-dark" border />
        <Box className="colour__border--grey" border />
        <Box className="colour__border--grey-light" border />
        <Box className="colour__border--white" border />
        <Box className="colour__border--blue" border />
        <Box className="colour__border--blue-light" border />
      </div>
    ));
}
