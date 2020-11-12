import express from 'express'
import webpack from 'webpack'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import chokidar from 'chokidar'
import config from '../webpack.config'

const compiler = webpack(config)
const port = 3001
const server = express()
const webpackDevMiddleware = WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
})
const watcher = chokidar.watch('./data')

watcher.on('ready', () => {
  watcher.on('change', () => {
    console.log('Clearing /app/ module cache from server')
    console.log(__dirname)
    Object.keys(require.cache)
      .filter((id) => !(/[/\\]node_modules[/\\]/.test(id)))
      .forEach((id) => {
        if (/[/\\]data[/\\]/.test(id)) {
          console.log(id)
          // delete require.cache[id]
        }
      })
    webpackDevMiddleware.invalidate()
  })
})

config.plugins.push(new webpack.HotModuleReplacementPlugin())

server.use(webpackDevMiddleware)

server.use(webpackHotMiddleware(compiler))

webpackDevMiddleware.waitUntilValid(() => {
  console.log('Package is in a valid state')
})

server.listen(port, () => {
  console.log('Server started on port:' + port)
})
