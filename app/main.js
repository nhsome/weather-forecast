'use strict'

const server = require('./kernel/server'),
  init = require('./kernel/init'),
  Router = require('./kernel/Router');

(async function() {
  const initObj = await init()
  let router = new Router(server, initObj)
  router.addEventsListeners()
  server.listen(initObj.config.serverPort, () => {
    console.log('Server listening on port ' + initObj.config.serverPort)
  })
})()

process.on('unhandledRejection', error => {
  console.log(error)
  process.exit(1)
})