import React, { PropTypes } from "react";
import * as Icons from "./icons/";

export default function Icon({
  name,
  size = "1.25em",
 }) {
  const IconSvg = Icons[name];
  return (
    <IconSvg
      height={size}
      width={size}
    />
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
};
