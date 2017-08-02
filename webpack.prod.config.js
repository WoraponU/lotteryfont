const path = require('path')
const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const context = path.resolve(__dirname, 'src')

const customModule = {
  css: [
    'isomorphic-style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 1
      }
    },
    'resolve-url-loader',               
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true
      }
    },
  ],
  scss: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true
      }
    },
    'resolve-url-loader',     
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true
      }
    },
  ],
  img: [
    {
      loader: 'url-loader',
      options: {
        limit: 100000,
      },
    }
  ],
  font: [
    {
      loader: 'url-loader',
      options: {
        limit: 100000,
      },
    }
  ]
};

module.exports = {
  devtool: 'source-map',
  context,
  entry: {
    app: [
      'normalize.css',
      './client/index'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      Lib: path.resolve(context, 'common/lib'),
      Actions: path.resolve(context, 'common/actions'),
      Middlewares: path.resolve(context, 'common/middlewares'),
      Containers: path.resolve(context, 'common/containers'),
      Components: path.resolve(context, 'common/components'),
      Theme: path.resolve(context, 'common/theme'),
      Langs: path.resolve(context, 'common/langs'),
      Hocs: path.resolve(context, 'common/hocs')
    },
    extensions: [".js", ".json", ".scss"]
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, enforce: 'pre', loader: 'eslint-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, exclude: /node_modules/, use: customModule.css },
      { test: /\.css$/, include: /node_modules/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      { test: /\.scss$/, use: customModule.scss },
      { test: /\.(jpg|png|gif)$/, use: customModule.img },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, use: customModule.font}
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJSPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true,
      comments: false,
      minimize: false
    }),
    new LodashModuleReplacementPlugin({
      'caching': true,
      'collections': true,
      'paths': true
    }),
    // new webpack.optimize.CommonsChunkPlugin({ 
    //   name: 'vendors', 
    //   filename: '[name].[hash].js',
    //   minChunks: Infinity 
    // }),
  ],
}