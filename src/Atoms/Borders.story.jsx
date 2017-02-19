import React from 'react';
import { storiesOf } from '@kadira/storybook';
import borders from './Borders.css';
import Box from '~/utils/Box';

const containerStyles = {border: "1rem solid whitesmoke"};

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
        <Box demo={borders} className="borderRadius__top" borders/>
        <Box demo={borders} className="borderRadius__right" borders/>
        <Box demo={borders} className="borderRadius__bottom" borders/>
        <Box demo={borders} className="borderRadius__left" borders/>
      </div>
    ))
    .add('border radius nth-child', () => (
      <div>
        <p style={containerStyles}>
          <Box demo={borders} className="borderRadius__firstChild" borders/>
          <Box demo={borders} className="borderRadius__firstChild" borders/>
          <Box demo={borders} className="borderRadius__firstChild" borders/>
        </p>
        <p style={containerStyles}>
          <Box demo={borders} className="borderRadius__lastChild" borders/>
          <Box demo={borders} className="borderRadius__lastChild" borders/>
          <Box demo={borders} className="borderRadius__lastChild" borders/>
        </p>
        <p style={containerStyles}>
          <Box demo={borders} className="borderRadius__topChild" borders/>
          <Box demo={borders} className="borderRadius__topChild" borders/>
          <Box demo={borders} className="borderRadius__topChild" borders/>
        </p>
        <p style={containerStyles}>
          <Box demo={borders} className="borderRadius__bottomChild" borders/>
          <Box demo={borders} className="borderRadius__bottomChild" borders/>
          <Box demo={borders} className="borderRadius__bottomChild" borders/>
        </p>
      </div>
    ));
}
