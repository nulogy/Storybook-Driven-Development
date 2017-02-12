import React, { PropTypes } from "react";
import Field from "./Field";
import styles from "../Radio.css";

const isChecked = (value, chosenValue) => value === chosenValue;

const mapOptions = (options, chosenValue) => ( options.map(
  ({text, value, disabled = false}) => (
    <label className={styles[disabled ? "disabledLabel" : "label"]} key={value}>
      <input className={styles.radio} type="radio" value={value} checked={isChecked(value, chosenValue)} disabled={disabled} />
      { text ? text : value }
    </label>
  )
));

const RadioField = ({
  disabled = false,
  label,
  name,
  options,
  value,
}) => {
  return (
    <Field name={name} label={label}>
      { mapOptions(options, value) }
    </Field>
  );
};

RadioField.propTypes = {};

export default RadioField;
