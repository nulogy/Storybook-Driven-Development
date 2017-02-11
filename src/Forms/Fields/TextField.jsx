import React, { PropTypes } from "react";
import Field from "./Field";
import styles from "../Input.css"

const TextField = ({
  disabled = false,
  label,
  name,
  placeholder,
  value,
}) => (
  <Field name={name} label={label}>
    <input
      disabled={disabled}
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
  value: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
}

export default TextField;
