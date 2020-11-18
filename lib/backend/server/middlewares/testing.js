function Testing(req, res, next) {
  console.log({
    'req.path': req.path,
    'req.originalUrl': req.originalUrl,
    'req.query': req.query,
    'req.baseUrl': req.baseUrl,
    'req.method': req.method,
    'req.route': req.route,
    'req.body': req.body,
    'req.files': req.files,
  })
  next()
}
export default Testing
