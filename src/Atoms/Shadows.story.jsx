import React from 'react';
import { storiesOf } from '@kadira/storybook';
import shadows from './Shadows.css';
import Box from '../Box';

export default function ShadowsStory() {
  storiesOf('⭐️ Shadows', module)
    .add('shadow styles', () => (
      <div>
        <Box demo={shadows} className="one__light" />
        <Box demo={shadows} className="one__medium" />
        <Box demo={shadows} className="one__heavy" />

        <Box demo={shadows} className="two__light" />
        <Box demo={shadows} className="two__medium" />
        <Box demo={shadows} className="two__heavy" />

        <Box demo={shadows} className="three__light" />
        <Box demo={shadows} className="three__medium" />
        <Box demo={shadows} className="three__heavy" />
      </div>
    ))
    .add('inset shadow styles', () => (
      <div>
        <Box demo={shadows} className="one--inset__light" />
        <Box demo={shadows} className="one--inset__medium" />
        <Box demo={shadows} className="one--inset__heavy" />

        <Box demo={shadows} className="two--inset__light" />
        <Box demo={shadows} className="two--inset__medium" />
        <Box demo={shadows} className="two--inset__heavy" />

        <Box demo={shadows} className="three--inset__light" />
        <Box demo={shadows} className="three--inset__medium" />
        <Box demo={shadows} className="three--inset__heavy" />
      </div>
    ));
}
