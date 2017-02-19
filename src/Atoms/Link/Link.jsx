import React, { PropTypes } from 'react';
import isFunction from 'lodash/isFunction';
import styles from './Link.css';

export default function Link({ to, children }) {
  return isFunction(to) ?
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
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
