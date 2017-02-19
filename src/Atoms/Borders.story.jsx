import React from 'react';
import { storiesOf } from '@kadira/storybook';
import borders from './Borders.css';
import Box from '../Box';

const borderStyles = { border: ".1rem solid black" };

const nthChildContainerStyles = {border: "1rem solid whitesmoke"};

export default function BordersStory() {
  storiesOf('⭐️ Borders', module)
    .add('border styles', () => (
      <div>
        <Box demo={borders} className="light" />
        <Box demo={borders} className="medium" />
        <Box demo={borders} className="heavy" />

        <Box demo={borders} className="light__sharp" />
        <Box demo={borders} className="medium__sharp" />
        <Box demo={borders} className="heavy__sharp" />

        <Box demo={borders} className="light__top__sharp" />
        <Box demo={borders} className="medium__top__sharp" />
        <Box demo={borders} className="heavy__top__sharp" />

        <Box demo={borders} className="light__bottom__sharp" />
        <Box demo={borders} className="medium__bottom__sharp" />
        <Box demo={borders} className="heavy__bottom__sharp" />

        <Box demo={borders} className="light__left__sharp" />
        <Box demo={borders} className="medium__left__sharp" />
        <Box demo={borders} className="heavy__left__sharp" />

        <Box demo={borders} className="light__right__sharp" />
        <Box demo={borders} className="medium__right__sharp" />
        <Box demo={borders} className="heavy__right__sharp" />
      </div>
    ))
    .add('border radii', () => (
      <div>
        <Box demo={borders} className="borderRadius__top" style={borderStyles}/>
        <Box demo={borders} className="borderRadius__right" style={borderStyles}/>
        <Box demo={borders} className="borderRadius__bottom" style={borderStyles}/>
        <Box demo={borders} className="borderRadius__left" style={borderStyles}/>
      </div>
    ))
    .add('border radius nth-child', () => (
      <div>
        <p style={nthChildContainerStyles}>
          <Box demo={borders} className="borderRadius__firstChild" style={borderStyles}/>
          <Box demo={borders} className="borderRadius__firstChild" style={borderStyles}/>
          <Box demo={borders} className="borderRadius__firstChild" style={borderStyles}/>
        </p>
        <p style={nthChildContainerStyles}>
          <Box demo={borders} className="borderRadius__lastChild" style={borderStyles}/>
          <Box demo={borders} className="borderRadius__lastChild" style={borderStyles}/>
          <Box demo={borders} className="borderRadius__lastChild" style={borderStyles}/>
        </p>
        <p style={nthChildContainerStyles}>
          <Box demo={borders} className="borderRadius__topChild" style={borderStyles}/>
          <Box demo={borders} className="borderRadius__topChild" style={borderStyles}/>
          <Box demo={borders} className="borderRadius__topChild" style={borderStyles}/>
        </p>
        <p style={nthChildContainerStyles}>
          <Box demo={borders} className="borderRadius__bottomChild" style={borderStyles}/>
          <Box demo={borders} className="borderRadius__bottomChild" style={borderStyles}/>
          <Box demo={borders} className="borderRadius__bottomChild" style={borderStyles}/>
        </p>
      </div>
    ));
}
