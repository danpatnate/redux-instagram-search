module.exports = {
  "extends": "airbnb",
  "installedESLint": true,
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
    },
  },
  "globals": {
    "document": true,
    "window": true,
  },
  "rules": {
    "react/jsx-filename-extension": "off",
    "linebreak-style": "off",
    "react/require-extension": "off",
    "max-len": "off",
    "jsx-a11y/label-has-for": "off",
    "no-console": "off",
  },
};
