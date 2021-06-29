module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          [
            '@babel/preset-env', {
              targets: { node: 'current' },
              useBuiltIns: 'usage'
            }
          ],
          '@babel/preset-react',
        ],
      },
      exclude: ['/node_modules'],
    }],
  }
};