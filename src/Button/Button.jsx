import React, { PropTypes } from "react";

const Button = ({
  children,
  disabled = false,
  name,
  submit = false
}) => (
  <button
    className="button"
    disabled={disabled}
    id={name}
    name={name}
    type={submit ? "submit" : null}
  >
    { children }
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  submit: PropTypes.bool,
};

export default Button;
