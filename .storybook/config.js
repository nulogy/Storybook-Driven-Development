import { configure } from '@kadira/storybook';

const req = require.context(
  "../src",       // path where stories live
  true,           // recursive?
  /\.story.jsx$/, // story files match this pattern
);

function loadStories() {
  req.keys().forEach(
    module => req(module).default()
  );
}

configure(loadStories, module);
