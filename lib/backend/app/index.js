import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'

SwaggerUI({
  url: 'http://127.0.0.1:3000/spec.yml',
  dom_id: '#swagger',
  docExpansion: 'none',
  deepLinking: true,
})

if (module.hot) {
  module.hot.accept()
}
