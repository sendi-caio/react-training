import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { relativeToDoc, faviconPath } from '../shared/path'

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
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                config: path.resolve(__dirname, 'postcss.config.js'),
              }
            }
          },
          {
            loader: 'resolve-url-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
              },
            },
          }
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: relativeToDoc('template.ejs'),
      filename: './index.html',
      favicon: faviconPath,
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
