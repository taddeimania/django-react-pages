/*
    ./webpack.config.js
*/
const path = require('path'),
      fs = require('fs');

var files = fs.readdirSync(path.resolve(__dirname, 'src', 'components')).reduce((result, item, index, array) => {
    result[item.replace(".jsx", "")] = "../app/src/components/" + item;
    return result;
}, {});

module.exports = {
  entry: files,
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].map.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}

