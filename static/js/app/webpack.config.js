/*
    ./webpack.config.js
*/
const path = require('path');
module.exports = {
  entry: {
    myPeople: "../app/src/components/MyPeople.jsx",
    userDetail: "../app/src/components/UserDetail.jsx"
  },
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

