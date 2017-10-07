var webpack = require('webpack');
var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var devConfig = require("./webpack.config.js");

var prodConfig = devConfig;

prodConfig.output = {
  filename: 'index.js',
  path: path.resolve(__dirname, 'dist'),
  libraryTarget: 'var', // Export as a global variable
  library: 'maps' // name of the global variable
};
prodConfig.entry = {
  entry: "./app/index.js"
};
prodConfig.devtool = undefined;
prodConfig.plugins = [
  new UglifyJSPlugin({
    minimize: true
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
  })
];


module.exports = prodConfig;