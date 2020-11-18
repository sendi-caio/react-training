require('../shared/setup')
const inquirer = require('inquirer')
const fs = require('fs')
const { dataApiPath, path } = require('../shared/path')
const specs = fs.readdirSync(dataApiPath)
  .filter((file) => !['.gitkeep'].includes(file))
  .map((file) => ({ name: file, value: path.join(dataApiPath, file) }))

async function selectAPI() {
  let spec
  try {
    ({ spec } = inquirer.prompt([
      {
        name: 'spec',
        message: 'choose spec',
        type: 'list',
        choices: specs,
      },
    ]))
  } catch (e) {
    //
  }
  return spec
}

export default selectAPI
