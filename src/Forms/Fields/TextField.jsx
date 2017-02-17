import React, { PropTypes } from 'react';
import Field from './Field';
import styles from '../Inputs/Input.css';

const TextField = ({
  disabled = false,
  label,
  name,
  placeholder,
  value,
  onChange,
}) => (
  <Field name={name} label={label}>
    <input
      disabled={disabled}
      onChange={onChange}
      className={styles.inputText}
      id={name}
      name={name}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  </Field>
);

TextField.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
};

export default TextField;
