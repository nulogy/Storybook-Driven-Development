import React, { PropTypes } from "react";
import Icon from "~/Icon";
import styles from "./Nav.css";
import logo from '~/App/nulogy_logo.svg';

const sections = [
  { value: "/home", text: "Home" },
  { value: "/portal", text: "Portal" },
  { value: "/table", text: "Table" },
  { value: "/bargraph", text: "BarGraph" },
  { value: "/edit", text: "Edit" },
];

const Nav = ({ onChange, options = sections, value }) => (
  <nav className={styles.nav}>
    <ul className={styles.list} aria-role="navigation">
      <li>
        <a className={styles.itemHeader}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.text}>Styleguide Driven Development</h1>
        </a>
      </li>
      { options.map(({value, text}) => (
        <li>
          <a href={value} className={styles.item}>
            <Icon name={text} />
            <span className={styles.text}>{ text }</span>
          </a>
        </li>
      )) }
    </ul>
  </nav>
);

Nav.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string,
    })
  ).isRequired,
  value: PropTypes.string,
};

export default Nav;
