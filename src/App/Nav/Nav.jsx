import React, { PropTypes } from "react";
import Icon from "~/Icon";

const sections = [
  { value: "/home", text: "Home" },
  { value: "/portal", text: "Portal" },
  { value: "/table", text: "Table" },
  { value: "/bargraph", text: "BarGraph" },
  { value: "/edit", text: "Edit" },
];

const Nav = ({ onChange, options = sections, value }) => (
  <navigation>
    <ul aria-role="navigation">
      { options.map(({value, text}) => (
        <li>
          <a href={value}>
            <Icon name={text} />
            { text }
          </a>
        </li>
      )) }
    </ul>
  </navigation>
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
