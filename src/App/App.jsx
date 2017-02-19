import React from 'react';
import styles from './App.css';
import Nav from "./Nav";
import FormController from './Toggle/Form/FormController';
import Form from './Toggle/Form';

export default function App() {
  return (
    <div className={styles.app}>
      <Nav className={styles.nav} value="/edit" />
      <main className={styles.content} role="main">
        <FormController>
          <Form />
        </FormController>
      </main>
    </div>
  );
}
