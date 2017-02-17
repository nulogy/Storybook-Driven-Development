import React from 'react';
import { storiesOf } from '@kadira/storybook';
import shadows from './Shadows.css';
import Box from '../Box';

export default function ShadowsStory() {
  storiesOf('⭐️ Shadows', module)
    .add('shadow styles', () => (
      <div>
        <Box demo={shadows} className="one--light" />
        <Box demo={shadows} className="one--medium" />
        <Box demo={shadows} className="one--heavy" />

        <Box demo={shadows} className="two--light" />
        <Box demo={shadows} className="two--medium" />
        <Box demo={shadows} className="two--heavy" />

        <Box demo={shadows} className="three--light" />
        <Box demo={shadows} className="three--medium" />
        <Box demo={shadows} className="three--heavy" />
      </div>
    ))
    .add('inset shadow styles', () => (
      <div>
        <Box demo={shadows} className="one--inset--light" />
        <Box demo={shadows} className="one--inset--medium" />
        <Box demo={shadows} className="one--inset--heavy" />

        <Box demo={shadows} className="two--inset--light" />
        <Box demo={shadows} className="two--inset--medium" />
        <Box demo={shadows} className="two--inset--heavy" />

        <Box demo={shadows} className="three--inset--light" />
        <Box demo={shadows} className="three--inset--medium" />
        <Box demo={shadows} className="three--inset--heavy" />
      </div>
    ));
}
