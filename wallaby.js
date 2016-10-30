module.exports = function (wallaby) {

  return {
    files: [
      'src/**/*.js*',
      '!src/**/*.spec.js*',

      '__testDoubles__/*.js',
      {pattern: 'src/**/*.css', load: false, instrument: false},
      {pattern: 'package.json', load: false, instrument: false}
    ],

    tests: [
      'src/**/*.spec.js*',
      {pattern: 'src/**/*.snapshot*', ignore: true, load: false}
    ],

    compilers: {
      '**/*.js*': wallaby.compilers.babel()
    },

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest',

    setup: (wallaby) => {
      const jestConfig = require('./package.json').jest;
      wallaby.testFramework.configure(jestConfig);
    },
  };
};
