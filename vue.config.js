const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'src/components',
          to: 'components/',
          toType: 'dir',
        },
      ]),
    ],
  },
};
