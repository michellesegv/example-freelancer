# Ejemplo de Webpack

En esta pequeña guía encontrarán lo necesario para empezar a utilizar 
Webpack.

## ¿Qué se va a utilizar?

### Babel

Anteriormente haz visto que _Babel_ es una herramienta que transforma 
tu código JS de última generación a un JS que se pueda entender en los 
navegadores actuales o `node.js`. Para este caso de ES6 a ES5, por
ahora...
> En el LMS hay algunos ejemplos de esto

Al momento de instalar _Babel_ deberás agregar todos los plugins 
(complementos que sirven para agregar una función nueva y específica) 
necesarios para que funcione correctamente. Puedes ver que en la 
[documentación](https://babeljs.io/docs/plugins/) se detallan varios 
plugins, entonces si necesitas usar todo el estándar tendrías que 
instalar cada uno e imáginate hacer eso, sería demasiado. 

Por eso hay un **preset** (paquete especial) que incluye todo el 
estándar que se llama `env`.

También necesitarás instalar el preset de `react` así no se necesitará
importar el transformador de `jsx`.

Y todo esto lo vas a integrar con Webpack.

### Webpack

_Webpack_ es un empaquetador de módulos. Pero, ¿qué es eso? Bueno, es 
tomar todos los módulos que se usan en tu proyecto y luego lo agrupa en 
un solo paquete. 

En la página de [Webpack](https://webpack.js.org/) puedes ver que hay
muchos archivos JS, CSS, etc; que hacen de un sitio web muy grande.
Entonces _Webpack_ toma esos archivos y los convierte, minimiza, 
optimiza empaquetándolos a uno solo o cuántos desees.

Entonces con esto "transformamos" nuestro código del entorno de 
 _desarrollo_ a un entorno de _producción_.

### Requerimientos previos

Deberás tener instalado `node.js` y `npm`. Si por algún motivo no lo 
tienes, puedes descargarlo desde su [página web](https://nodejs.org/es/).
Recuerda que `npm` se instalará de manera automática. Luego, si deseas, 
verifica las versiones descargadas con los siguientes comandos:

        node --version
        npm --version
        
Vas a instalar varias dependencias y para ello puedes utilizar`npm` o 
`yarn`. Yo sé que te gusta `npm`, entonces no se diga más =)

### Pasos

1. Crearás tu `package.json`:
        
        npm init -y

2. Instalarás las dependencias, hay 2 tipos:
    > **Desarrollo**: para fase de desarrollo: `--save-dev`. Ej: 
    webpack, babel, etc.
    
    > **Producción**: propias del proyecto: `--save`. Ej: react, 
    bootstrap, etc.   

    Se pueden instalar de a uno o varias a la vez. Empezarás con las de 
    desarrollo:
    
    2.1. Tener `webpack` de forma global
        
    2.2. `webpack`
    
    2.3. `webpack-cli`
        
    2.4. `webpack-dev-server`: servidor de desarrollo
       
       npm install -g webpack 
        
       npm install --save-dev webpack webpack-cli webpack-dev-server
       
3. Instalarás Babel:
    
    3.1. `babel-cli`: incluye el core de babel, el cual es necesario, de
    lo contrario no funcionaría babel
    
    3.2. `babel-loader`: cargador, nos permitirá usar babel en webpack
    
    3.3. `babel-preset-env`: permite usar el nuevo estándar de ES6
    
    3.4. `babel-preset-react`: permite usar react

       npm install --save-dev babel-cli babel-loader babel-preset-env babel-preset-react
       
4. Si usas estilos, webpack ofrece un cargador para los estilos; así 
usarás un CSS específico para cada componente y podrás crear un CSS final:

       npm install --save-dev css-loader style-loader
       
5. Webpack se encargará de crear el ambiente de producción, por lo que 
hará una copia de tus carpetas al `public` o `dist` de forma
automática con:

        npm install --save-dev html-webpack-plugin
        
6. Ahora, para que se abra el navegador usarás:

        npm install --save-dev open-browser-webpack-plugin
        
7. Dependencias de producción: `react` y `react-dom`

        npm install --save react react-dom
        
Deberá quedar así:

```json
"devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-loader": "^7.1.3",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "css-loader": "^0.28.10",
    "html-webpack-plugin": "^3.0.4",
    "open-browser-webpack-plugin": "0.0.5",
    "style-loader": "^0.20.2",
    "webpack": "^4.1.0",
    "webpack-dev-server": "^3.1.0"
  },
  "dependencies": {
    "react": "^16.2.0",
    "react-dom": "^16.2.0"
  }
```
        
### Completando configuración de Babel

No olvides crear el archivo `.babelrc`

```json
{
  "presets": [
    "env",
    "react"
  ]
}
``` 
## Producción

Configuraremos nuestro archivo Webpack para producción

1. Creamos un archivo `webpack.config.prod.js`

2. Importamos Webpack y los plugins

```js
const { resolve } = require('path');

// Importamos webpack
const webpack = require('webpack');
// Importamos los plugins que habiamos instalado y los declaramos
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
```
3. Dentro de nuestro `module.exports = {}` pondremos:

```js
context:  resolve(__dirname, 'src'),
  entry: './index.js', // archivo de entrada
  output: { // archivos de salida
    filename: 'app.min.js', // archivo de salida
    path: resolve(__dirname, 'dist'), // ruta donde va a estar el archivo
    publicPath: ''
  },
```
4. Seteamos algunas configuraciones de nuestro archivo de salida:
```js
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
              'react', // Babel preestablecido para todos los complementos de React
              'react-boilerplate'
            ]
          }
        }
      },
      {
        test: /\.css$/, // todos los archivos `css`
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' }, // Se creará un tag 'style
          { loader: 'css-loader' } // Le injetamos el 'css'
        ]
      }
    ]
  },
```
5. Plugins!
```js
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
    // Migrar webpack 1 a webpack 2, para algunos loaders que no soportan  versiones actuales
    new webpack.LoaderOptionsPlugin({ // lee las diferencias aquí: https://webpack.js.org/guides/migrating/
      minimize: true, 
      debug: false
    }),
    // Minifica el JS
    new webpack.optimize.UglifyJsPlugin({
      beautify: false
    }),
    // definimos variable global de entorno de producción. Se para cargar configuraciones separadas de desarrollo y producción
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
```
6. Ahora añadiremos un script a nuestro `package.json`

 ```json
    " scripts " :  {
        "build": "webpack --config webpack.config.prod.js --progress --profile --colors"
        }
```
        

7. Lo ejecutamos con el siguiente comando:

        npm run build
Y ahora puedes observar que se ha creado una archivo `app.min.js` y a tu HTML se le ha añadido un script que enlaza a ese archivo :D

## Deploy
Una vez que ya tengamos nuestro ambiente de desarrollo, ya podemos mandarlo a gh-pages para publicarlo

- Para esto necesitaremos una dependencia más de desarrollo
Instalaremos el paquete gh-pages. Ejecutar `gh-pages --help` para ver una lista de opciones.
Con una instalación local de gh-pages, se puede configurar un script como lo siguiente:

 ```json
    " scripts " :  {
        " deploy " :  " gh-pages -d dist "
    }
```
Para publicar todo desde su carpeta `dist` a su gh-pages, se debría ejecutar el siguiente comando:

        npm run deploy

Y ahora ya podremos ver nuestro proyecto en una URL pública!
