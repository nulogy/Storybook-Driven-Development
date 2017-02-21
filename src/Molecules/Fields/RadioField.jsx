import RadioGroup from '~/Atoms/Inputs/RadioGroup';
import React, { PropTypes } from 'react';
import Field from './Field';


const RadioField = ({
  label,
  name,
  ...radioProps
}) => (
  <Field name={name} label={label}>
    <RadioGroup name={name} {...radioProps} />
  </Field>
);

RadioField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

export default RadioField;
