const { resolve } = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

module.exports = {
  context:  resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js',
  },
  /*Solo sirve para development*/
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'react',
              'react-boilerplate'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
       }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'dist', 'index.html'),
      filename: 'index.html'
    }),
    new OpenBrowserWebpackPlugin({
      url: 'http://localhost:8080'
    })
  ]
}