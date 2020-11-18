import chalk from 'chalk'
import ip from 'ip'

export default function Info(...params) {
  const [port] = params
  console.log(`--------------------------
${chalk.yellow('TALENT DIG API SERVER')}
${chalk.hex('#6a0dad').bold(`http://127.0.0.1:${port}`)}
${chalk.hex('#6a0dad').bold(`http://${ip.address()}:${port}`)}
ctrl+c to exit
--------------------------`)
}
