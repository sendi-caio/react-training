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
import auth from 'json-server-auth'
import { readFileSync } from 'fs'
import yaml from 'yaml'
import chokidar from 'chokidar'
// local import
import webpackConfig from '../webpack.config'
import { schemaValidator, swaggerConfig } from './middlewares'
import {
  faviconPath,
  backendPath,
  path,
  relativeToBackend,
  dataApiPath,
  dataPath,
} from '../../shared/path'

const file = readFileSync(path.join(backendPath, 'rules', 'one.yml'), 'utf8')
const rules = yaml.parse(file)

const compiler = webpack(webpackConfig)
const rewriter = auth.rewriter(rules)
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
server.use(require('./middlewares/openApiValidator').default)
// server.use(require('./middlewares/openApiValidate').default)
server.get('/catch/:id', require('./middlewares/catchMe').default)
server.get('/catch/:id', require('./middlewares/catchMe').default)
server.use(router)
