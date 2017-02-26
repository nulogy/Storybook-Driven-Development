import React, { PropTypes } from 'react';
import '~/index.css';
import styles from './StorybookTheme.css';

const StorybookTheme = ({ children }) => (
  <div className={styles.story}>
    {children}
  </div>
);

StorybookTheme.propTypes = { children: PropTypes.node };

export default StorybookTheme;
