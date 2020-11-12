import chalk from 'chalk'

export default function Info(...params) {
  const [port] = params
  console.log(`--------------------------
${chalk.yellow('TALENT DIG API SERVER')}
${chalk.hex('#6a0dad').bold(`http://127.0.0.1:${port}`)}
ctrl+c to exit
--------------------------`)
}
