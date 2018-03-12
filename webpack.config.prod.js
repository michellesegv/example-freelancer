const { resolve } = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context:  resolve(__dirname, 'src'),
  entry: './index.js', // archivo de entrada
  output: { // archivos de salida
    filename: 'app.min.js', // archivo de salida
    path: resolve(__dirname, 'dist'), // ruta donde va a estar el archivo, si deseo que sea aqui mismo pongo _dirname
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.js$/, // todos los `js`
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // ignoramos archivos dentro de node_modules
          options: {
            // Config babel
            presets: [ 
              'env',
              'react',
              'react-boilerplate'
            ]
          }
        }
      },
      {
        test: /\.css$/, // todos los archivos `css`
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' }, // primero creamos un tag `style`
          { loader: 'css-loader' } // y le injetamos el `css`
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