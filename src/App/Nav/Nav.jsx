import Icon from '~/Atoms/Icon';
import logo from '~/App/nulogy_logo.svg';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './Nav.css';

const sections = [
  { value: '/home', text: 'Home' },
  { value: '/portal', text: 'Portal' },
  { value: '/table', text: 'Table' },
  { value: '/bargraph', text: 'BarGraph' },
  { value: '/edit', text: 'Edit' },
];

const isActive = (value, chosenValue) => value === chosenValue;

const Nav = ({ className, options = sections, value }) => (
  <nav className={classNames(className, styles.nav)} role="navigation">
    <ul className={styles.list}>
      <li>
        <a className={styles.itemHeader}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.text}>Styleguide Driven Development</h1>
        </a>
      </li>
      { options.map(({ value: itemValue, text }) => (
        <li key={itemValue}>
          <a href={itemValue} className={styles[isActive(itemValue, value) ? 'itemActive' : 'item']}>
            <Icon name={text} />
            <span className={styles.text}>{ text }</span>
          </a>
        </li>
      )) }
    </ul>
  </nav>
);

Nav.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.node,
    }),
  ),
  value: PropTypes.string,
};

export default Nav;
