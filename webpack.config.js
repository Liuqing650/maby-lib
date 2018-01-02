const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const env = process.env.WEBPACK_ENV;

let libraryName = 'maby';

let plugins = [], outputFile, devtool = 'source-map';
console.log('✅ 当前是 %s 模式', env);
if (env === 'prod') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  plugins.push(new CleanWebpackPlugin(['dist']));
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
  devtool = 'inline-source-map';
}

let config = {
  entry: {
    maby: __dirname + '/index.js'
  },
  devtool: devtool,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["env", 'react', 'es2015']
        }
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(['css-loader'])
      }, {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ["css-loader", "less-loader"]
        })
      },
    ]
  },
  plugins: plugins
};
if (env === 'dev') {
  config.devServer = {
    contentBase: './dist'
  }
}
module.exports = config;