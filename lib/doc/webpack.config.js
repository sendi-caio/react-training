import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { relativeToDoc } from '../shared/path'

export default {
  mode: 'development',
  stats: 'errors-only',
  infrastructureLogging: {
    level: 'error',
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    compress: true,
  },
  devtool: '#source-map',
  entry: {
    bundle: [
      'webpack-hot-middleware/client?__webpack_hmr&reload=true',
      relativeToDoc('app', 'index.jsx'),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(yml|yaml)$/,
        use: [
          { loader: 'json-loader' },
          { loader: 'yaml-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: relativeToDoc('template.ejs'),
      filename: './index.html',
      title: 'DOC',
    }),
  ],
  optimization: {
    noEmitOnErrors: true,
  },
  performance: {
    hints: false,
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.css',
      '.json',
      '.yaml',
      '.yml',
    ],
  },
}
