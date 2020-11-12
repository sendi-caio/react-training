import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { relativeToBackend } from '../shared/path'

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
      relativeToBackend('app', 'index.js'),
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
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: relativeToBackend('template.html'),
      filename: './index.html',
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
