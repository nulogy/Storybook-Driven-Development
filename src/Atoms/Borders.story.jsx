import React from 'react';
import { storiesOf } from '@kadira/storybook';
import borders from './Borders.css';
import Box from '../Box';

export default function BordersStory() {
  storiesOf('⭐️ Borders', module)
    .add('border styles', () => (
      <div>
        <Box demo={borders} className="light" />
        <Box demo={borders} className="medium" />
        <Box demo={borders} className="heavy" />

        <Box demo={borders} className="light--sharp" />
        <Box demo={borders} className="medium--sharp" />
        <Box demo={borders} className="heavy--sharp" />

        <Box demo={borders} className="light--top--sharp" />
        <Box demo={borders} className="medium--top--sharp" />
        <Box demo={borders} className="heavy--top--sharp" />

        <Box demo={borders} className="light--bottom--sharp" />
        <Box demo={borders} className="medium--bottom--sharp" />
        <Box demo={borders} className="heavy--bottom--sharp" />

        <Box demo={borders} className="light--left--sharp" />
        <Box demo={borders} className="medium--left--sharp" />
        <Box demo={borders} className="heavy--left--sharp" />

        <Box demo={borders} className="light--right--sharp" />
        <Box demo={borders} className="medium--right--sharp" />
        <Box demo={borders} className="heavy--right--sharp" />
      </div>
    ));
}
