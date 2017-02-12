import React, { PropTypes } from "react";
import isFunction from "lodash/isFunction";
import styles from "./Link.css";

const Link = ({to, children}) => {
  return isFunction(to) ?
    <a className={styles.link} onClick={to}>{children}</a> :
    <a className={styles.link} href={to}>{children}</a>;
}

Link.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
  children: PropTypes.node,
};

export default Link;
