const routes = require('./routes.js'),
  HttpError = require('standard-http-error')

class Router {
  constructor(server, initObj) {
    this.server = server
    this.initObj = initObj
  }

  addEventsListeners() {
    routes.forEach((route) => {
      let Controller = require('../controllers/' + route.controller)
      let controller = new Controller(this.initObj)

      route.path = (this.initObj.config.indexRoute || '') + route.path

      this.server[route.method](route.path, async (req, res, next) => {
        try {
          let result = controller[route.action](req, res, next)
          if (typeof result.then === 'function') { // is Promise
            result = await result
          }
          if (!res.headersSent) {
            res.send(result)
          }
        } catch(err) {
          Router._handleControllerError(err, res)
        }
      })
    })
  }

  static _handleControllerError(err, res) {
    let code = err instanceof HttpError ? err.code : 500
    if (code === 500) {
      console.error(err)
    } else {
      console.warn(err)
    }
    res.status(code)
      .send({ error: err.message })
  }
}

module.exports = Router
