'use strict'

const Services = require('../services'),
  config = require('./config.js')

module.exports = async function() {
  let services = Services(config)
  return { config, services }
}
