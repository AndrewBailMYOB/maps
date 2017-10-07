var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./app/index.js",
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var', // Export as a global variable
    library: 'maps' // name of the global variable
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/babel']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["env", "react"]
        }
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: [path.join(__dirname, 'dist')]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"dev"'
    })
  ]
};
