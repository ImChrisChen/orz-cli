/**
 * Created by WebStorm.
 * User: chrischen
 * Date: 2021/7/28
 * Time: 22:03
 */

const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content))
const { clone } = require('./download')

const spawn = async (...args) => {
  const { spawn } = require('child_process')
  return new Promise(resolve => {
    const proc = spawn(...args)
    
    // 日志流对接
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)
    proc.on('close', () => {
      resolve()
    })
  })
}

module.exports = async name => {
  // clear();
  const data = await figlet('MINGLE-CLI')
  log(data)
  
  
  /**
   * --------------------------- 1.创建项目 --------------------------------------
   */
    // let repo = 'gitee:Chris_cn/system.chrisorz.cn'
    // let repo = 'gitlab:gitlab.chrischen.top:jian/demo'
    // let repo = 'github:ImChrisChen/chrisorz-toolbox'
    // let repo = 'github:su37josephxia/vue-template'
  let repo = 'github:ImChrisChen/vue3-template'
  
  log(`🚗 创建项目 ${ name }`)
  await clone(repo, name)
  
  /**
   * --------------------------- 2.安装依赖 --------------------------------------
   */
  
  // log('安装依赖')
  // await spawn('npm', ['install'], { cwd: `./${ name }` })
  
  log(chalk.green(`
    ✅ 安装完成
    1. cd ${ name }
    2. npm install
    3. npm run serve
  `))
  
}

