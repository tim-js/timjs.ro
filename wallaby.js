module.exports = function (wallaby) {

  return {
    files: [
      'src/**/*.js*',
      '!src/**/*.spec.js*',

      '__testDoubles__/*.js',
      {pattern: 'src/**/*.css', load: false, instrument: false}
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
      wallaby.testFramework.configure({
        "moduleNameMapper": {
          "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__testDoubles__/fileDummy.js",
          "^.+\\.(css|less)$": "<rootDir>/__testDoubles__/styleDummy.js"
        }
      });
    },
  };
};
