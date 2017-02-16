import React from 'react';
import { storiesOf } from '@kadira/storybook';
import shadows from './Shadows.css';

const Box = ({ className }) => (
  <div
    className={shadows[className]}
    style={{
      textAlign: 'center',
      padding: '2rem',
      height: '6rem',
      marginBottom: '2rem',
    }}
  >{className}</div>
);

export default function ShadowsStory() {
  storiesOf('⭐️ Shadows', module)
    .add('shadow styles', () => (
      <div>
        <Box className="one--light" />
        <Box className="one--medium" />
        <Box className="one--heavy" />

        <Box className="two--light" />
        <Box className="two--medium" />
        <Box className="two--heavy" />

        <Box className="three--light" />
        <Box className="three--medium" />
        <Box className="three--heavy" />
      </div>
    ))
    .add('inset shadow styles', () => (
      <div>
        <Box className="one--inset--light" />
        <Box className="one--inset--medium" />
        <Box className="one--inset--heavy" />

        <Box className="two--inset--light" />
        <Box className="two--inset--medium" />
        <Box className="two--inset--heavy" />

        <Box className="three--inset--light" />
        <Box className="three--inset--medium" />
        <Box className="three--inset--heavy" />
      </div>
    ));
}
