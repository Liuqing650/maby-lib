const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
let port = process.env.PORT || 18888;
module.exports = {
  entry: {
    main: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port,
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(['./dist']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'maby-cli测试用例',
      template: __dirname + '/public/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      maby: path.resolve('../lib')
    },
    modules: [
      path.resolve(__dirname, 'node_modules'),
      './'
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["env", 'react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader', 
          'less-loader'
        ]
      }
    ]
  }
};