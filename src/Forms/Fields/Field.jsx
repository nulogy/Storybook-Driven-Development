import React, { PropTypes } from 'react';
import styles from './Field.css';

const Field = ({
  children,
  label,
  name,
}) => (
  <div className={styles.field}>
    <label className={styles.label} htmlFor={name}>{label}</label>
    { children }
  </div>
);

Field.propTypes = {
  children: React.PropTypes.node,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Field;
