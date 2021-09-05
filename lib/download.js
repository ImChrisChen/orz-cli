/**
 * Created by WebStorm.
 * User: chrischen
 * Date: 2021/7/28
 * Time: 22:14
 */

const { promisify } = require('util')
// const ora = require('ora')
const download = promisify(require('download-git-repo'))
// const download = require('download-git-repo')

module.exports.clone = async function (repo, desc) {
  // const spinner = ora(`🏄🏼 下载... ${ repo }`)
  // spinner.start()
  await download(repo, desc)
  // spinner.succeed('下载完成')
}
