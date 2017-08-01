const path = require('path')
const webpack = require('webpack')
const context = path.resolve(__dirname, 'src')

const customModule = {
  css: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
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
  urlLoader: [{
    loader: 'url-loader',
    options: {
      limit: 100000,
    },
  }]
};

module.exports = {
  devtool: 'eval-source-map',
  context,
  entry: {
    app: [
      'react-hot-loader/patch',
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
      { test: /\.(jpg|png|gif)$/, use: customModule.urlLoader },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, use: customModule.urlLoader}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:3000"
    }
  }
}