import selectServer from './selectServer'
import selectPort from './selectPort'
import test from '../server'
import selectDB from './selectDB'

async function run() {
  try {
    const type = await selectServer()
    const port = await selectPort(type)

    switch(type) {
      case 'API': {
        const db = await selectDB()
        test({ port, db })
      }
        break
      case 'DOC':
        test(port)
        break
      default:
        throw new Error('Error')
    }

  } catch (e) {
    //
    console.dir({ message: 'server error' })
  }
}

export default run
