const argv = require('minimist')(process.argv.slice(2), { alias: {} })
const init = require('./lib/init')
const build = require('./lib/build')

const omit = require('nanoutils/cjs/omit')

const methods = {
  init,
  build
}

methods[argv._[0]](argv)
