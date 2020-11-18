import { middleware } from 'express-openapi-validator'
import { readFileSync } from 'fs'
import { dataApiPath, path } from '../../../shared/path'
const apiSpec = readFileSync(path.join(dataApiPath, 'blog.json'), { encoding: 'utf-8' })
console.log(apiSpec)
export default middleware({
  apiSpec: JSON.parse(apiSpec),
  validateRequests: true,
  validateResponses: true,
})
