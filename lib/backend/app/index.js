import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'

SwaggerUI({
  configUrl: 'http://127.0.0.1:3000/config.yml'
})

if (module.hot) {
  module.hot.accept()
}
