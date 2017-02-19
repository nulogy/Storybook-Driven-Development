import React from "react";
import { configure, addDecorator } from "@kadira/storybook";
import StorybookTheme from "./StorybookTheme";

addDecorator((story) => (
  <StorybookTheme>
    {story()}
  </StorybookTheme>
));

const req = require.context(
  "../../src",       // path where stories live
  true,           // recursive?
  /\.story.jsx$/, // story files match this pattern
);

function loadStories() {
  req.keys().forEach(
    module => req(module).default()
  );
}

configure(loadStories, module);
