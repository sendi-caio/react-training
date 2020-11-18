import { OpenApiValidator } from 'express-openapi-validate'
import { readFileSync } from 'fs'
import { dataApiPath, path } from '../../../shared/path'
const apiSpec = readFileSync(path.join(dataApiPath, 'blog.json'), { encoding: 'utf-8' })
console.log(apiSpec)
const validator = new OpenApiValidator(JSON.parse(apiSpec))

export default validator.match()
