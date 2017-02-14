import React, { PropTypes } from "react";
import Field from "./Field";
import styles from "../Radio.css";

const isChecked = (value, chosenValue) => value === chosenValue;

const mapOptions = (name, options, chosenValue, onChange) => ( options.map(
  ({text, value, disabled = false}) => (
    <label className={styles[disabled ? "disabledLabel" : "label"]} key={value}>
      <input
        className={styles.radio}
        type="radio"
        name={name}
        value={value}
        checked={isChecked(value, chosenValue)}
        disabled={disabled}
        onChange={onChange}
      />
      { text ? text : value }
    </label>
  )
));

const RadioField = ({
  disabled = false,
  label,
  name,
  onChange,
  options,
  value,
}) => {
  return (
    <Field name={name} label={label}>
      { mapOptions(name, options, value, onChange) }
    </Field>
  );
};

RadioField.propTypes = {
  onChange: PropTypes.func,
};

export default RadioField;
