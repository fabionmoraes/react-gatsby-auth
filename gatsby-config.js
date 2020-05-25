module.exports = {
  siteMetadata: {
    title: 'Adota Pet',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-prettier-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        prettier: {
          patterns: [], // string or array of paths/files/globs to include related only to Prettier
          ignorePatterns: [], // string or array of paths/files/globs to exclude related only to Prettier
          customOptions: {
            singleQuote: true,
            trailingComma: "es5"
          }, // see: https://prettier.io/docs/en/options.html
        },
        eslint: {
          patterns: [], // string or array of paths/files/globs to include related only to ESLint
          ignorePatterns: [], // string or array of paths/files/globs to exclude related only to ESLint
          formatter: "stylish", // set custom or third party formatter
          maxWarnings: undefined, // number of max warnings allowed, when exceed it will fail Gatsby build
          emitWarning: true, // if true, will emit lint warnings
          failOnError: false, // if true, any lint error will fail the build, you may set true only in your prod config
          failOnWarning: false, // same as failOnError but for warnings
          plugins: [], // an array of plugins to load for ESLint
          customOptions: {}, // see: https://eslint.org/docs/developer-guide/nodejs-api#cliengine
        },
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
  ],
};
