module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
  
    "rules": {
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    },
    "settings": {
        "import/resolver": {
          "webpack": {
            "config": "webpack.config.js"
          }
        }
    },
};