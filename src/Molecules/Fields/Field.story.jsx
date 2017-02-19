import React from 'react';
import { storiesOf } from '@kadira/storybook';
import '~/index.css';
import Field from './Field';

export default function FieldStory() {
  storiesOf('❤️ Field', module)
    .add('default', () => (
      <Field name="name" label="a label" >
        Some Input Control
      </Field>
    ));
}
