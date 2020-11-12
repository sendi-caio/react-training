require('dotenv').config()
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const port = process.env.APP_PORT || 3001

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    port,
    noInfo: true,
    stats: 'errors-only',
  },
  stats: 'errors-only',
  infrastructureLogging: {
    level: 'error',
  },
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /[\\/]node_modules[\\/](react-router|react-router-dom|sockjs-client)[\\/].+\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader'
          }
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.ejs',
      filename: './index.html',
      favicon: './lib/asset/favicon.ico',
      title: 'REACT TRAINING'
    }),
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.css',
    ],
  },
}
