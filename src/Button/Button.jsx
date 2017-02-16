import React, { PropTypes } from 'react';
import styles from './Button.css';

const Button = ({
  children,
  disabled = false,
  name,
  submit = false,
}) => (
  <button
    className={styles[submit ? 'submit' : 'normal']}
    disabled={disabled}
    id={name}
    name={name}
    type={submit ? 'submit' : null}
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
