/* eslint-disable no-unused-vars */

import axios from 'axios'
import { path, assetPath } from '../../../shared/path'

function validate(schema) {
  return true
}

async function schemaValidator (req, res) {
  let valid = false
  if (req.query.url) {
    try {
      const response = await axios.get(req.query.url)
      valid = validate(response.data)
    } catch (e) {
      //
    }
  }
  if (req.accepts('image/webp') === 'image/webp') {
    res.sendFile(path.join(assetPath, valid ? 'valid.png' : 'invalid.png'))
  } else {
    res.send({ valid })
  }
}

export default schemaValidator
