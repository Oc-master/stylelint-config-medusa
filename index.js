module.exports = {
  rules: {
    // Disallow unknown type selectors
    'selector-type-no-unknown': null,

    // Disallow unknown units
    'unit-no-unknown': null,

    // Specify lowercase or uppercase for units
    'unit-case': null
  },
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order'
  ],
  plugins: ['stylelint-order'],
  ignoreFiles: ['src/libs/**']
};
