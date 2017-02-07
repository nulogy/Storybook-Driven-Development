import React, { PropTypes } from "react";

const Field = ({
  children,
  label,
  name,
}) => (
  <div className="field">
    <label className="label" htmlFor={name}>{label}</label>
    { children }
  </div>
);

Field.propTypes = {
  children: React.PropTypes.node,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
}

export default Field;
