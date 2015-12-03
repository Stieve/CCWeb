'use strict';
var path = require("path");
var webpack = require('webpack');
var node_modules_path = path.resolve(__dirname, 'node_modules');

var webpackConfig = {
  devtool: 'eval',
  context: path.resolve(__dirname, "src/js"),
  entry: {
    'app': "./app",
    'chat-client': './ChatClient/main',
    'jsx': './Jsx/main',
    'first-react': './FirstReact/main',
    'forms': './Forms/main',
    'vendor': ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, "dist/js"),
    publicPath: "public/assets/js/",
    filename: "[name].js",
    library: 'MyLibrary'
  },
  resolve:{
    extensions: ['','.js','.jsx'],
  },
  module:{
    loaders: [
      {
        test: /\.(es6|js|jsx)$/,
        exclude: /(node_modules)/,
        loaders: ['babel?presets=react']
      }
    ]
  },
  devServer: {
    contentBase: 'public',
    /*proxy: {
      '*': {target: 'http://localhost:5000'}
    }*/
  }
};

module.exports = webpackConfig;
