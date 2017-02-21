import ToggleGroup from '~/Atoms/Inputs/ToggleGroup';
import React, { PropTypes } from 'react';
import Field from './Field';


const ToggleField = ({
  label,
  name,
  ...radioProps
}) => (
  <Field name={name} label={label}>
    <ToggleGroup name={name} {...radioProps} />
  </Field>
);

ToggleField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

export default ToggleField;
