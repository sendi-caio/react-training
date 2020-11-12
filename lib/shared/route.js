/* eslint-disable no-unused-vars */

export default function route(server, router, rules) {
  let vroute
  const routes = []
  server._router.stack.forEach((middleware) => {
    if (middleware.route) {
      routes.push(middleware.route)
    } else if (middleware.name === 'router') {
      middleware.handle.stack.forEach((handler) => {
        vroute = handler.route
        vroute && routes.push(vroute)
      })
    }
  })
  console.log(routes)
  return (req, res) => {
    res.send('test')
  }
}
