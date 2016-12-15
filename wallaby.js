module.exports = function (wallaby) {

  return {
    files: [
      'src/**React/*.js*',
      '!src/**React/*.spec.js*',

      '__testDoubles__/*.js',
      {pattern: 'src/**/*.css', load: false, instrument: false},
      {pattern: 'package.json', load: false, instrument: false}
    ],

    tests: [
      'src/**React/*.spec.js*',
      {pattern: 'src/**React/*.snapshot*', ignore: true, load: false}
    ],

    compilers: {
      '**React/*.js*': wallaby.compilers.babel()
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
