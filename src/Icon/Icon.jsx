import React, { PropTypes } from "react";

export default function Icon({ name }) {
  return (
    <div>Icon { name }</div>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};
