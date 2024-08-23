const { override } = require('customize-cra');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = override((config) => {
  if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
      new CompressionPlugin({
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8,
      })
    );
  }
  return config;
});
