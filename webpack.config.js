const path = require('path')
const webpack = require('webpack')
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
require('dotenv').config();

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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      GOOGLE_MAP_KEY: process.env.GOOGLE_MAP_KEY,      
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:3000"
    }
  },
})