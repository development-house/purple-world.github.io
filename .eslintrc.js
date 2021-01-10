module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  rules: {
    "object-curly-spacing": "error",
    "quotes": ["error", "single"],
    "semi": [2, "never"]
  }
};