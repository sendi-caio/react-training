import {
  bodyParser,
  create as Create,
  router as Router,
  defaults as Middlewares
} from 'json-server'
import webpack from 'webpack'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import WebpackHotMiddleware from 'webpack-hot-middleware'
import serveFavicon from 'serve-favicon'
import ExpressFileUpload from 'express-fileupload'
import portFinder from 'portfinder'
import auth from 'json-server-auth'
import fs from 'fs'
import yaml from 'yaml'
// local import
import Info from './info'
import webpackConfig from '../webpack.config'
import { faviconPath, backendPath, defaultPort, path, relativeToBackend } from '../../shared/path'

const file = fs.readFileSync(path.join(backendPath, 'rules', 'one.yml'), 'utf8')
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

export default async function run() {
  try {
    const availablePort = await portFinder.getPortPromise({ port })
    server.db = router.db
    server.use(expressFileUpload)
    server.use(bodyParser)
    server.use(webpackDevMiddleware)
    server.use(serveFavicon(faviconPath))
    server.use([compression, cors, logger, def])
    server.use(rewriter)
    server.use(auth)
    server.use(webpackHotMiddleware)
    server.use('/spec.yml', (req, res) => res.sendFile(path.join(backendPath, 'examples', 'all.yaml')))
    server.use(router)
    server.listen(availablePort, () => Info(availablePort, defaultPort.api))
  } catch (e) {
    console.log('No Port Unavailable')
  }
}
