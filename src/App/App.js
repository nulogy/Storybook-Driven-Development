import React from 'react';
import logo from './nulogy_logo.svg';
import styles from './App.css';
import IntervalFormController from './Intervals/Form/FormController';
import IntervalForm from './Intervals/Form';

export default function App() {
  return (
    <div>
      <div className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <h1 className={styles.title}>Styleguide Driven Developement</h1>
      </div>
      <div className={styles.content}>
        <IntervalFormController>
          <IntervalForm />
        </IntervalFormController>
      </div>
    </div>
  );
}
