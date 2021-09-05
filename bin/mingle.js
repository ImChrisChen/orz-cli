#!/usr/bin/env node

const { program } = require('commander')

program.version(require('../package.json').version)

program
  .command('new <name>')
  .description('new project')
  .action(require('../lib/new'))

program.parse(process.argv)
