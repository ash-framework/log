'use strict'

const adapter = require('./adapter')

const LEVELS = Object.freeze({
  FATAL: 'fatal',
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug',
  TRACE: 'trace'
})

class Log {
  constructor () {
    const { DEBUG, NODE_ENV } = process.env
    let level

    if (NODE_ENV === 'production') {
      level = LEVELS.ERROR
    }
    if (NODE_ENV !== 'production') {
      level = LEVELS.INFO
    }
    if (DEBUG) {
      level = LEVELS.TRACE
    }

    this.adapter = adapter({level})
  }

  fatal (message) {
    this.adapter.fatal(message)
  }

  error (message) {
    this.adapter.error(message)
  }

  warn (message) {
    this.adapter.warn(message)
  }

  info (message) {
    this.adapter.info(message)
  }

  debug (message) {
    this.adapter.debug(message)
  }

  trace (message) {
    this.adapter.trace(message)
  }
}

module.exports = Log
