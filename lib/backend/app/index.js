import SwaggerUI from 'swagger-ui'
import StandAlone from 'swagger-ui/dist/swagger-ui-standalone-preset'
import 'swagger-ui/dist/swagger-ui.css'

SwaggerUI({
  configUrl: '/config.yml',
  presets: [SwaggerUI.presets.apis, StandAlone],
  layout: 'StandaloneLayout',
})

if (module.hot) {
  module.hot.accept()
}
