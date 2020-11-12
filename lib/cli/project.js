const clear = require('clear')
const CFonts = require('cfonts')

const run = async () => {
  clear()
  CFonts.say('Talent Dig', { font: 'tiny', colors: ['yellow'] })
  console.log('project')
}

run()
