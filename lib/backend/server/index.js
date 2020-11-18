import {
  bodyParser,
  create as Create,
  router as Router,
  defaults as Middlewares,
} from 'json-server'
import express from 'express'
import webpack from 'webpack'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import WebpackHotMiddleware from 'webpack-hot-middleware'
import serveFavicon from 'serve-favicon'
import ExpressFileUpload from 'express-fileupload'
import portFinder from 'portfinder'
import auth from 'json-server-auth'
import { readdirSync, readFileSync } from 'fs'
import yaml from 'yaml'
import chokidar from 'chokidar'
// local import
import Info from './info'
import webpackConfig from '../webpack.config'
import schemaValidator from './middlewares/schemaValidator'
import swaggerConfig from './middlewares/swaggerConfig'
import {
  faviconPath,
  backendPath,
  defaultPort,
  path,
  relativeToBackend,
  dataApiPath,
  dataPath,
} from '../../shared/path'

console.log('test')
readdirSync(dataApiPath).forEach((v) => console.log(v))
const file = readFileSync(path.join(backendPath, 'rules', 'one.yml'), 'utf8')
const rules = yaml.parse(file)

const compiler = webpack(webpackConfig)
const rewriter = auth.rewriter(rules)
const port = process.env.API_PORT || defaultPort.api
const server = Create()
const webpackDevMiddleware = WebpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
})
const webpackHotMiddleware = WebpackHotMiddleware(compiler)
const router = Router(relativeToBackend('examples', 'db.json'))
const [compression, cors, , logger, def] = Middlewares()

const expressFileUpload = ExpressFileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
})

chokidar.watch(dataPath).on('change', () => {
  webpackDevMiddleware.invalidate()
  webpackHotMiddleware.publish({ action: 'reload' })
})

export default async function run() {
  try {
    const availablePort = await portFinder.getPortPromise({ port })
    server.disable('x-powered-by')
    server.db = router.db
    server.use(bodyParser)
    server.use(expressFileUpload)
    server.use(webpackDevMiddleware)
    // server.use((req, res, next) => {
    //   console.log(req.path)
    //   next()
    // })
    // server.use(require('./middlewares/testing').default)
    server.use(serveFavicon(faviconPath))
    server.use([compression, cors, logger, def])
    server.use(rewriter)
    server.use(auth)
    server.use(webpackHotMiddleware)
    server.get('/spec/all.json', (req, res) => res.status(200).type('application/json').sendFile(path.join(backendPath, 'examples', 'all.json')))
    server.get('/spec/bts-112020.json', (req, res) => res.status(200).type('application/json').sendFile(path.join(backendPath, 'examples', 'bts-112020.json')))
    server.use('/spec', express.static(dataApiPath))
    server.get('/config.yml', swaggerConfig)
    server.get('/schema-validator/:debug?', schemaValidator)
    // server.use(require('./middlewares/testing').default)
    // server.use(require('./middlewares/openApiValidator').default)
    server.use(require('./middlewares/openApiValidate').default)
    server.get('/catch/:id', require('./middlewares/catchMe').default)
    server.get('/catch/:id', require('./middlewares/catchMe').default)
    server.use(router)

    // server.use((err, req, res) => {
    //   console.error(err)
    //   res.status(err.status || 500).json({
    //     message: err.message,
    //     errors: err.errors,
    //   })
    // })

    // server.use((err, req, res) => {
    //   const statusCode = err.statusCode || 500
    //   res.status(statusCode).json({
    //     error: {
    //       name: err.name,
    //       message: err.message,
    //       data: err.data,
    //     },
    //   })
    // })


    server.listen(availablePort, '0.0.0.0', () => Info(availablePort, defaultPort.api))
  } catch (e) {
    console.log(e)
    console.log(`Port ${port} Unavailable`)
  }
}
