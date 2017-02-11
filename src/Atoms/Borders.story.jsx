import React from 'react';
import { storiesOf } from '@kadira/storybook';
import borders from './Borders.css';

const Box = ({className}) => (
  <div className={borders[className]} style={{
      "text-align": "center",
      padding: "2rem",
      height: "6rem",
      "margin-bottom": "2rem"
  }}>{className}</div>);

export default function BordersStory() {
  storiesOf('Borders', module)
    .add('border styles', () => (
      <div>
        <Box className="light" />
        <Box className="normal" />
        <Box className="heavy" />

          <Box className="light--sharp" />
          <Box className="normal--sharp" />
          <Box className="heavy--sharp" />
      </div>
    ));
}
