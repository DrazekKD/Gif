module.exports = {
  extends: [
    "airbnb",
    "airbnb-typescript",
    "prettier",
  ],
  parserOptions: {
    project: ["./tsconfig.json", "./tailwind.config.js"],
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/function-component-definition": "off",
    "react/no-array-index-key": "warn",
    "react/prop-types": "warn",
    "react/jsx-filename-extension": "off",
    "@typescript-eslint/quotes": "off",
  },
  root: true,
};
