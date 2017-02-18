import React, { PropTypes } from "react";
import * as Icons from "./icons/";
import styles from "./Icon.css";

export default function Icon({ name }) {
  const IconSvg = Icons[name];
  return (
    <i className={styles.icon}>
      <IconSvg className={styles.svg} />
    </i>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};
