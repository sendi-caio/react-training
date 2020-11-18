/* eslint-disable no-unused-vars */

import yaml from 'yaml'
import { readdirSync } from 'fs'
import { backendPath, dataApiPath, path } from '../../../shared/path'
const examplesPath = path.join(backendPath, 'examples')
const config = {
  dom_id: '#swagger',
  docExpansion: 'none',
  deepLinking: false,
  validatorUrl: '/schema-validator',
}
function swaggerConfig(req, res) {
  const urls = readdirSync(dataApiPath).filter((file) => !['.gitkeep'].includes(file)).map((file) => ({
    name: path.parse(file).name,
    url: `/spec/${file}`,
  }))
  config.urls = urls
  res.type('text/yaml').status(200).send(yaml.stringify(config))
}

export default swaggerConfig
