import React from 'react';
import { storiesOf } from '@kadira/storybook';
import colours from './Colours.css';

const textStyle = isInverse => isInverse ? {"backgroundColor": "black"} : null;
const Text = ({className, inverse = false}) => (
  <p
    className={colours[className]}
    style={textStyle(inverse)}
  >{className}</p>);

const boxStyle = isInverse => {
  let style = {
      "text-align": "center",
      color: "white",
      borderStyle: "solid",
      borderWidth: ".4rem",
      padding: "2rem",
      height: "6rem",
      "margin-bottom": "2rem"
  };
  if (isInverse === true) {
    style = Object.assign(style, { color: "black"});
  };
  return style;
};
const Box = ({className, inverse = false}) => (
  <div className={colours[className]} style={boxStyle(inverse)}>{className}</div>);

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
    ))
    .add('backgrounds', () => (
      <div>
        <Box className="colour__background--black" />
        <Box className="colour__background--grey-dark" />
        <Box className="colour__background--grey" />
        <Box className="colour__background--grey-light" />
        <Box className="colour__background--white" inverse />
        <Box className="colour__background--blue" />
      </div>
    ))
    .add('borders', () => (
      <div>
        <Box className="colour__border--black" inverse />
        <Box className="colour__border--grey-dark" inverse />
        <Box className="colour__border--grey" inverse />
        <Box className="colour__border--grey-light" inverse />
        <Box className="colour__border--white" inverse />
        <Box className="colour__border--blue" inverse />
      </div>
    ));

}
