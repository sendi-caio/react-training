const inquirer = require('inquirer')
const fs = require('fs')
const { dataApiPath, path, dataPath } = require('../shared/path')

const dbs = fs.readdirSync(path.join(dataPath, 'db'))
  .filter((file) => !['.gitkeep'].includes(file) && file.endsWith('.json'))
  .map((file) => ({ name: file, value: path.join(dataApiPath, file) }))

async function selectDB() {
  let db
  try {
    ({ db } = await inquirer.prompt([
      {
        name: 'db',
        message: 'Please Choose Your Database File',
        type: 'list',
        choices: dbs,
      },
    ]))
  } catch (e) {
    //
  }
  return db

}

export default selectDB
