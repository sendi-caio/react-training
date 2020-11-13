import SwaggerUI from 'swagger-ui'
import StandAlone from 'swagger-ui/dist/swagger-ui-standalone-preset'
import 'swagger-ui/dist/swagger-ui.css'

console.log(SwaggerUI.plugins)
console.log(SwaggerUI.presets.apis)

SwaggerUI({
  configUrl: 'http://127.0.0.1:3000/config.yml',
  presets: [SwaggerUI.presets.apis, StandAlone],
  layout: 'StandaloneLayout',
})

if (module.hot) {
  module.hot.accept()
}
