module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
  ],
  "env": {
    "jest": true,
    "browser": true,
  },
  "rules": {
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["!scripts/**", "!.storybook/**", "!scripts/**"]}],
    "react/jsx-filename-extension": 0,
  }
};
