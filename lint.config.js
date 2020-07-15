const jshint = require('gulp-jshint');

const lintConfig = {
  strict: false,
  quotmark: false,
  browser: true,
  devel: true,
  undef: false,
  unused: true,
  unused: true,
  globals: {
    $: true
  },
  esversion: 6
};

module.exports = lintConfig;