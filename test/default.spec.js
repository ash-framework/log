/* global describe, it, afterEach */

const Log = require('../src')
const td = require('testdouble')
const assert = require('assert')
const NODE_ENV = process.env.NODE_ENV

describe('Log', function () {
  afterEach(() => {
    process.env.NODE_ENV = NODE_ENV
    td.reset()
  })

  it('fatal', function () {
    let logger = new Log()
    td.replace(logger, 'adapter')

    logger.fatal('fatal error message')

    td.verify(logger.adapter.fatal('fatal error message'))
  })

  it('error', function () {
    let logger = new Log()
    td.replace(logger, 'adapter')

    logger.error('custom error message')

    td.verify(logger.adapter.error('custom error message'))
  })

  it('warn', function () {
    let logger = new Log()
    td.replace(logger, 'adapter')

    logger.warn('custom warning')

    td.verify(logger.adapter.warn('custom warning'))
  })

  it('info', function () {
    let logger = new Log()
    td.replace(logger, 'adapter')

    logger.info('custom info')

    td.verify(logger.adapter.info('custom info'))
  })

  it('debug', function () {
    let logger = new Log()
    td.replace(logger, 'adapter')

    logger.debug('custom debug message')

    td.verify(logger.adapter.debug('custom debug message'))
  })

  it('trace', function () {
    let logger = new Log()
    td.replace(logger, 'adapter')

    logger.trace('custom trace message')

    td.verify(logger.adapter.trace('custom trace message'))
  })

  it('NODE_ENV === production', function () {
    process.env.NODE_ENV = 'production'
    let logger = new Log()

    assert.strictEqual(logger.adapter.level, 'error')
  })

  it('NODE_ENV === development', function () {
    process.env.NODE_ENV = 'development'
    let logger = new Log()

    assert.strictEqual(logger.adapter.level, 'info')
  })

  it('NODE_ENV === debug', function () {
    process.env.DEBUG = 'true'
    let logger = new Log()

    assert.strictEqual(logger.adapter.level, 'trace')
  })
})
