import React, { PropTypes } from 'react';
import styles from './App.css';
import Nav from './Nav';
import FormController from './Intervals/Form/FormController';
import FormV1 from './Intervals/Form/v1';
import FormV2 from './Intervals/Form/v2';
import FormV3 from './Intervals/Form/v3';

const getForm = (formVersion) => {
  switch (formVersion) {
    case 1:
      return FormV1;
    case 2:
      return FormV2;
    default:
      return FormV3;
  }
};

export default function App({ formVersion = 3 }) {
  const Form = getForm(formVersion);
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

App.propTypes = { formVersion: PropTypes.number };
