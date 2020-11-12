/* eslint-disable consistent-return */

import path from 'path'
import fileUpload from 'express-fileupload'
import jsonServer from 'json-server'
import auth from 'json-server-auth'
import swaggerDist from 'swagger-ui-dist'
import favicon from 'serve-favicon'
// import Cors from 'cors'
// import browserSync from 'browser-sync'
// import express from 'express'

import config from './config'
// import route from './route'

// const cors = Cors()
const server = jsonServer.create()
server.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}))
server.use(jsonServer.bodyParser)
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const swaggerPath = swaggerDist.absolutePath()

server.get('/swagger-ui.css', (req, res) => res.sendFile(path.join(swaggerPath, 'swagger-ui.css')))
server.get('/swagger-ui.css.map', (req, res) => res.sendFile(path.join(swaggerPath, 'swagger-ui.css.map')))
server.get('/swagger-ui-bundle.js', (req, res) => res.sendFile(path.join(swaggerPath, 'swagger-ui-bundle.js')))
server.get('/swagger-ui-bundle.js.map', (req, res) => res.sendFile(path.join(swaggerPath, 'swagger-ui-bundle.js.map')))

server.db = router.db
const rules = auth.rewriter({
  '/v1/users*': '/600/users$1',
  '/v1/posts*': '/660/posts$1',
  '/v1/tasks-items/rename*': '/660/tasks-items/rename$1',
  '/v1/tasks-items*': '/660/tasks-items$1',
  '/v1/tasks*': '/660/tasks$1',
  '/v1/register': '/register',
  '/v1/login': '/login',
  '/v1/upload': '/upload',
  '/v1/reset': '/reset',
})
const [compression, cors, , logger, def] = middlewares

server.get('/openapi.json', (req, res) => res.sendFile(path.join(__dirname, 'api', 'test.json')))
server.get('/auth.json', (req, res) => res.sendFile(path.join(__dirname, 'api', 'auth.json')))
server.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

server.use(favicon(path.join(__dirname, 'favicon.ico')))
server.use([compression, cors, logger, def])
server.use(rules)
server.use(auth)
// custom start
server.put('/tasks-items/rename/:id', (req, res) => {
  res.status(201).send('renamed')
})

server.post('/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send('No files were uploaded.')
  }
  const { profile } = req.files
  profile.mv(path.join(__dirname, 'uploads', 'file.png'), (err) => {
    if (err) return res.status(500).send(err)
    res.send('File uploaded!')
  })
})

server.get('/upload', (req, res) => res.sendFile(path.join(__dirname, 'uploads', 'file.png')))

server.get('/reset', (req, res) => {
  const { db } = server
  db.set('users', []).write()
  db.set('posts', []).write()
  db.set('tasks', []).write()
  res.send('reset success')
})
// custom end
// server.get('/route', route(server, router, rules))
server.use(router)

server.listen(
  config.port,
  () => console.log(`API server running at ${config.port}`),
)

// server.listen(config.port, () => {
//   console.log(`API Server Is Running At ${config.port}`)
//   browserSync({
//     files: ['./openapi.yaml', './server.js', './index.html'],
//     port: config.port + 1,
//     proxy: `http://localhost:${config.port}`,
//     ui: false,
//     online: false,
//     open: false,
//   })
// })
