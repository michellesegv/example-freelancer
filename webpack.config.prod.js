const { resolve } = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context:  resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: 'app.min.js',
    path: resolve(__dirname, 'dist'),
    publicPath: ''
    /*
    filename: 'bundle.js',
*/
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
    // concatena los modulos importados
    //  cocatena todos los plugins en uno solo y los ejecuta, antes se ejecutaba cada uno y no era óptimo
    new webpack.optimize.ModuleConcatenationPlugin(),
    // inyecta el codigo dentro del `index.html`
    //  Genera el html que se mostrará
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'dist', 'index.html'),
      filename: 'index.html',
    }),
    // optimizacion 1
    new webpack.optimize.OccurrenceOrderPlugin(),
    // optimizacion 2
    // migrar webpack 1 a webpack 2, para algunos loaders que no soportan  versiones actuales
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    // optimizacion 3
    // minifica
    new webpack.optimize.UglifyJsPlugin({
      beautify: false
    }),
    // definimos variable global de **entorno de producción
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
}