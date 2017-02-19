import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Box from '~/utils/Box';
import shadows from './Shadows.css';

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
        <Box demo={shadows} className="one__inset__light" />
        <Box demo={shadows} className="one__inset__medium" />
        <Box demo={shadows} className="one__inset__heavy" />

        <Box demo={shadows} className="two__inset__light" />
        <Box demo={shadows} className="two__inset__medium" />
        <Box demo={shadows} className="two__inset__heavy" />

        <Box demo={shadows} className="three__inset__light" />
        <Box demo={shadows} className="three__inset__medium" />
        <Box demo={shadows} className="three__inset__heavy" />
      </div>
    ));
}
