module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
      "browser": true,
      "es6": true,
      "mocha": true
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
    "comma-dangle": [
      "warn",
      "never"
    ],
    "indent": [
      "warn",
      2
    ],
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "consistent-return": [
      1
    ],
    "no-unused-expressions": [
      0
    ],
    "no-lonely-if": [0],
    "radix": [0],
    "arrow-body-style": ["warn", "as-needed"],
    "no-else-return": [0],
    "array-callback-return": [1],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/forbid-prop-types": [1, { "forbid": ['any'] }],
    "react/require-default-props": [0],
    "react/prop-types": [0],
  }
};
