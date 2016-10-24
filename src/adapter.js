const pino = require('pino')

module.exports = function (options) {
  const adapter = pino(options)
  return {
    level: adapter.level,
    fatal: adapter.fatal.bind(adapter),
    error: adapter.error.bind(adapter),
    warn: adapter.warn.bind(adapter),
    info: adapter.info.bind(adapter),
    debug: adapter.debug.bind(adapter),
    trace: adapter.trace.bind(adapter)
  }
}
