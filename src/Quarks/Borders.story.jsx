import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Box from '~/utils/Box';
import borders from './Borders.css';

const containerStyles = {
  border: '1rem solid whitesmoke',
  marginBottom: '2rem',
};

export default function BordersStory() {
  storiesOf('✨ Borders', module)
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
        <h4>Small</h4>
        <Box demo={borders} className="radius__sm" borders />
        <Box demo={borders} className="radius__sm__top" borders />
        <Box demo={borders} className="radius__sm__right" borders />
        <Box demo={borders} className="radius__sm__bottom" borders />
        <Box demo={borders} className="radius__sm__left" borders />

        <h4>Medium</h4>
        <Box demo={borders} className="radius" borders />
        <Box demo={borders} className="radius__top" borders />
        <Box demo={borders} className="radius__right" borders />
        <Box demo={borders} className="radius__bottom" borders />
        <Box demo={borders} className="radius__left" borders />

        <h4>Large</h4>
        <Box demo={borders} className="radius__lg" borders />
        <Box demo={borders} className="radius__lg__top" borders />
        <Box demo={borders} className="radius__lg__right" borders />
        <Box demo={borders} className="radius__lg__bottom" borders />
        <Box demo={borders} className="radius__lg__left" borders />
      </div>
    ))
    .add('border radius nth-child', () => (
      <div>
        <h4>Small</h4>
        <div style={containerStyles}>
          <Box demo={borders} className="radius__sm__firstChild" borders />
          <Box demo={borders} className="radius__sm__firstChild" borders />
          <Box demo={borders} className="radius__sm__firstChild" borders />
        </div>
        <div style={containerStyles}>
          <Box demo={borders} className="radius__sm__lastChild" borders />
          <Box demo={borders} className="radius__sm__lastChild" borders />
          <Box demo={borders} className="radius__sm__lastChild" borders />
        </div>
        <div style={containerStyles}>
          <Box demo={borders} className="radius__sm__topChild" borders />
          <Box demo={borders} className="radius__sm__topChild" borders />
          <Box demo={borders} className="radius__sm__topChild" borders />
        </div>
        <div style={containerStyles}>
          <Box demo={borders} className="radius__sm__bottomChild" borders />
          <Box demo={borders} className="radius__sm__bottomChild" borders />
          <Box demo={borders} className="radius__sm__bottomChild" borders />
        </div>

        <h4>Medium</h4>
        <div style={containerStyles}>
          <Box demo={borders} className="radius__firstChild" borders />
          <Box demo={borders} className="radius__firstChild" borders />
          <Box demo={borders} className="radius__firstChild" borders />
        </div>
        <div style={containerStyles}>
          <Box demo={borders} className="radius__lastChild" borders />
          <Box demo={borders} className="radius__lastChild" borders />
          <Box demo={borders} className="radius__lastChild" borders />
        </div>
        <div style={containerStyles}>
          <Box demo={borders} className="radius__topChild" borders />
          <Box demo={borders} className="radius__topChild" borders />
          <Box demo={borders} className="radius__topChild" borders />
        </div>
        <div style={containerStyles}>
          <Box demo={borders} className="radius__bottomChild" borders />
          <Box demo={borders} className="radius__bottomChild" borders />
          <Box demo={borders} className="radius__bottomChild" borders />
        </div>

        <h4>Large</h4>
        <div style={containerStyles}>
          <Box demo={borders} className="radius__lg__firstChild" borders />
          <Box demo={borders} className="radius__lg__firstChild" borders />
          <Box demo={borders} className="radius__lg__firstChild" borders />
        </div>
        <div style={containerStyles}>
          <Box demo={borders} className="radius__lg__lastChild" borders />
          <Box demo={borders} className="radius__lg__lastChild" borders />
          <Box demo={borders} className="radius__lg__lastChild" borders />
        </div>
        <div style={containerStyles}>
          <Box demo={borders} className="radius__lg__topChild" borders />
          <Box demo={borders} className="radius__lg__topChild" borders />
          <Box demo={borders} className="radius__lg__topChild" borders />
        </div>
        <div style={containerStyles}>
          <Box demo={borders} className="radius__lg__bottomChild" borders />
          <Box demo={borders} className="radius__lg__bottomChild" borders />
          <Box demo={borders} className="radius__lg__bottomChild" borders />
        </div>
      </div>
    ));
}
