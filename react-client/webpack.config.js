const path = require('path');

const props = loadProperties();

const OUTPUT_DIR = props.outputPath ? path.resolve(props.outputPath) : path.resolve(__dirname);

module.exports = {
  devtool: 'source-map',

  entry: './src/index.jsx',

  output: {
    path: OUTPUT_DIR,
    filename: 'react-bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: path.resolve(__dirname, 'src'),
        loader: "babel-loader"
      }
    ]
  }
};

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