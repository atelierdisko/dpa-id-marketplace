module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-normalize": {},
    "postcss-nested": {},
    "postcss-extend-rule": {},
    "postcss-preset-env": {
      stage: 1,
      importFrom: ["./styles/globals/variables.css"],
      exportTo: ["./styles/cssExports.js"],
    },
  },
};
