import React from "react";
import '~/index.css';
import styles from "./StorybookTheme.css";

const StorybookTheme = ({children}) => (
  <div className={styles.story}>
    {children}
  </div>
);

export default StorybookTheme;
