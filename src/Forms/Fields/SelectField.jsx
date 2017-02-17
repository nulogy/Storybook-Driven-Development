import React, { PropTypes } from 'react';
import Field from './Field';
import styles from '../Inputs/Input.css';

const mapOptions = options => (options.map(
  ({ text, value }) => <option value={value} key={value}>{ text || value }</option>,
));

const SelectField = ({
  disabled = false,
  label,
  name,
  onChange,
  options,
  value,
}) => (
  <Field name={name} label={label}>
    <select
      disabled={disabled}
      className={styles.inputSelect}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    >
      { mapOptions(options) }
    </select>
  </Field>
);

SelectField.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string,
    }),
  ).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default SelectField;
