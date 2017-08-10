const path = require('path');

const props = loadProperties();

const APP_DIR = path.resolve(__dirname, 'app');
const OUTPUT_DIR = props.outputPath ? path.resolve(props.outputPath) : path.resolve(__dirname);

const config = {
  devtool: 'source-map',

  entry: APP_DIR + '/main.js',

  output: {
    path: OUTPUT_DIR,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
    ]
  },

  resolve: {
    modules: [path.resolve(__dirname, "app"), "node_modules"],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};

module.exports = config;

// helpers

function loadProperties() {
  try  {
    return require('./webpack.properties.js');
  }
  catch (e) {
    console.log("webpack.properties.js is not found - continue with default props");
    return {};
  }
}