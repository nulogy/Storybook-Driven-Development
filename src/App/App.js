import React, { Component } from "react";
import logo from "./logo.svg";
import styles from "./App.css";
import IntervalForm from "./Intervals/Form";

class App extends Component {
  render() {
    return (
      <div>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>Styleguide Driven Developement</h1>
        </div>
        <div className={styles.content}>
          <IntervalForm />
        </div >
      </div>
    );
  }
}

export default App;
