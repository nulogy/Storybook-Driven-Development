import React from 'react';
import { storiesOf } from '@kadira/storybook';
import borders from './Borders.css';

const Box = ({ className }) => (
  <div
    className={borders[className]} style={{
      textAlign: 'center',
      padding: '2rem',
      height: '6rem',
      marginBottom: '2rem',
    }}
  >{className}</div>);

export default function BordersStory() {
  storiesOf('⭐️ Borders', module)
    .add('border styles', () => (
      <div>
        <Box className="light" />
        <Box className="medium" />
        <Box className="heavy" />

        <Box className="light--sharp" />
        <Box className="medium--sharp" />
        <Box className="heavy--sharp" />

        <Box className="light--top--sharp" />
        <Box className="medium--top--sharp" />
        <Box className="heavy--top--sharp" />

        <Box className="light--bottom--sharp" />
        <Box className="medium--bottom--sharp" />
        <Box className="heavy--bottom--sharp" />

        <Box className="light--left--sharp" />
        <Box className="medium--left--sharp" />
        <Box className="heavy--left--sharp" />

        <Box className="light--right--sharp" />
        <Box className="medium--right--sharp" />
        <Box className="heavy--right--sharp" />
      </div>
    ));
}
