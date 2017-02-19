import React from "react";
import Icon from "~/Icon";

const sections = [
  "Home",
  "Portal",
  "Table",
  "BarGraph",
  "Edit",
];

const Nav = () => (
  <navigation>
    <ul aria-role="navigation">
      { sections.map(section => (
        <li>
          <a>
            <Icon name={section} />
            { section }
          </a>
        </li>
      )) }
    </ul>
  </navigation>
);

export default Nav;
