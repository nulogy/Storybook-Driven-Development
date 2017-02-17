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
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./config/webpack.config.dev.js"
      }
    }
  },
  "rules": {
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["!config/**", "!.storybook/**", "!scripts/**"]}],
    "no-confusing-arrow": ["error", {"allowParens": true}],
    "react/jsx-filename-extension": 0,
    "react/require-default-props": 0,
  }
};
