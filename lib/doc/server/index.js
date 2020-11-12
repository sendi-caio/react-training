import webpack from 'webpack'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import WebpackHotMiddleware from 'webpack-hot-middleware'
import express from 'express'
import { docPath, path } from '../../shared/path'
import webpackConfig from '../webpack.config'
const compiler = webpack(webpackConfig)
const webpackDevMiddleware = WebpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
})
const webpackHotMiddleware = WebpackHotMiddleware(compiler)

async function run() {
  const server = express()
  server.use(webpackDevMiddleware)
  server.use(webpackHotMiddleware)
  server.use('/content', express.static(path.join(docPath, 'content'), { index: false }))
  server.listen(3002)
  console.log('doc running')
}

export default run
