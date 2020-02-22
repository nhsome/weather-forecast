'use strict'

const getIP = req => {
  let ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.connection.remoteAddress

  if (ip.substr(0, 7) === '::ffff:')
    ip = ip.substr(7)

  if (!ip.includes(',')) return ip

  return ip.split(',')[0]
}

module.exports = function(config) {
  return function(req, res, next) {
    req.resolvedIp = process.env.NODE_ENV === 'development' ? config.devExternalIp : getIP(req)
    next()
  }
}