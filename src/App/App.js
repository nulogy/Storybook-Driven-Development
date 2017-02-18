import React from 'react';
import logo from './nulogy_logo.svg';
import styles from './App.css';
import FormController from './Toggle/Form/FormController';
import Form from './Toggle/Form';

export default function App() {
  return (
    <div>
      <div className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <h1 className={styles.title}>Styleguide Driven Development</h1>
      </div>
      <div className={styles.content}>
        <FormController>
          <Form />
        </FormController>
      </div>
    </div>
  );
}
