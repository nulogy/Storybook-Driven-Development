import React, { PropTypes } from "react";

const TextField = ({
  disabled = false,
  label,
  name,
  placeholder,
  value,
}) => (
  <div className="field">
    <label className="label" htmlFor={name}>{label}</label>
    <input
      disabled={disabled}
      className="input inputText"
      id={name}
      name={name}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  </div>
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
