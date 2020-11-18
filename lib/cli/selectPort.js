const portFinder = require('portfinder')

async function selectPort(name) {
  const port = process.env[`${name}_PORT`]
  let availablePort
  try {
    availablePort = await portFinder.getPortPromise({ port })
  } catch (e) {
    console.log('Port Not Available')
  }
  return availablePort
}

export default selectPort
