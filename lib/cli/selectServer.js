const inquirer = require('inquirer')

async function selectServer() {
  const { name } = await inquirer.prompt([
    {
      name: 'name',
      message: 'Which Server You Want To Run ?',
      type: 'list',
      choices: [
        'API',
        'DOC',
        'SRC',
      ],
    },
  ])
  return name
}

export default selectServer
