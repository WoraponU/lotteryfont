const path = require('path')
const webpack = require('webpack')
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
  devtool: 'eval-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      'normalize.css',
      './client/index'
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  // node: {
  //   fs: 'empty',
  //   tls: 'empty',
  //   net: 'empty',
  //   child_process: 'empty',
  //   dns: 'empty'
  // },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:3000"
    }
  },
})