require('dotenv').config()
require('@babel/register')
require('regenerator-runtime/runtime')
module.exports = require('./server').default
