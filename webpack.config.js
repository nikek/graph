var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/Graph.js',
  output: {
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'd3-scale': 'd3-scale',
    'd3-shape': 'd3-shape'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ]
};
