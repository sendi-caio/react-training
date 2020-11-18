/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-unused-vars */
require('../shared/setup')
const clear = require('clear')
const inquirer = require('inquirer')
const fs = require('fs')
const { dataApiPath, path, dataPath } = require('../shared/path')
// const CFonts = require('cfonts')
// const backend = require('../backend')
// clear()
// CFonts.say('Talent Dig', { font: 'tiny', colors: ['yellow'] })
// backend()
const specs = fs.readdirSync(dataApiPath)
  .filter((file) => !['.gitkeep'].includes(file))
  .map((file) => ({ name: file, value: path.join(dataApiPath, file) }))

const dbs = fs.readdirSync(path.join(dataPath, 'db'))
  .filter((file) => !['.gitkeep'].includes(file) && file.endsWith('.json'))
  .map((file) => ({ name: file, value: path.join(dataApiPath, file) }))

inquirer.prompt([
  {
    name: 'spec',
    message: 'choose spec',
    type: 'list',
    choices: specs,
  },
  {
    name: 'db',
    message: 'choose db',
    type: 'list',
    choices: dbs,
  },
])
  .then(({spec}) => console.log(require(spec)))
