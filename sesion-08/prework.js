//Webapack

//Webpack es una herramienta muy usada en el desarrollo de aplicaciones en JavaScript modernas. Después de procesar la aplicación, webpack genera internamente un grafo de dependencias lo que le permite generar uno o más bundles. Este bundle contiene el código optimizado de todos los módulos y dependencias de tu aplicación.

// Entry
//El punto de entrada le dice a webpack cuál módulo debe ser usado para comenzar a crear el grafo de dependencias. Webpack se encargará de buscar todos los módulos y librerías que utilizan dicho punto de entrada. El valor por default es ./src/index.js, pero podemos especificar una ruta diferente.


module.exports = {
    entry: './path/to/entre/file.js'
  }

//output
//La salida especifica dónde deben colocarse los bundles resultantes y cómo se deben llamar los archivos. Por default el bundle principal es ./dist/main.js. Para cambiar este valor agregamos una propiedad output cuyo valor es un objeto que nos permite definir la ruta y el nombre del archivo.


const path = require('path');

module.exports = {
  entry: './path/to/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}

//Loaders
//Webpack solamente entiende archivos de JavaScript y JSON. Usando loaders webpack puede procesar otro tipo de archivos y convertirlos en módulos que serán agregados al grafo de dependencias.


const path = require('path');

module.exports = {
  entry: './path/to/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ] 
  }
}

//Plugins
//Los loaders nos ayudan a transformar ciertos tipos de módulos, mientras que los plugins permiten una amplia gama de tareas como optimización de los bundles, manejo de assets, inyección de variables de entorno, etc. Para usar un plugin debemos importarlo y agregarlo al arreglo plugins.


const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './path/to/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' }
    ] 
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
}

//Babel
//Babel es usado principalmente para convertir código ES6+ en una versión compatible con navegadores y ambientes tanto actuales como anteriores.


 // Babel Input: ES6 arrow function
 [1, 2, 3].map((n) => n + 1);

 // Babel Output: ES5 equivalent
 [1, 2, 3].map(function(n) {
   return n + 1;
 });

 
