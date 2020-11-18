import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import TimeFixPlugin from 'time-fix-plugin'
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
  devtool: 'cheap-module-source-map',
  entry: {
    bundle: [
      'webpack-hot-middleware/client?__webpack_hmr&reload=true',
      relativeToBackend('app', 'index.js'),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js',
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
    new TimeFixPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: relativeToBackend('template.ejs'),
      filename: './index.html',
    }),
  ],
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
  optimization: {
    emitOnErrors: false,
    splitChunks:  { chunks: 'all' },
    minimizer: [
      new TerserPlugin({
        // cache: true,
        parallel: true,
        // sourceMap: true, // Must be set to true if using source-maps in production
        // terserOptions: {
        //   // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        // }
      }),
    ],
  },
  target: ['web', 'es5'],
}
