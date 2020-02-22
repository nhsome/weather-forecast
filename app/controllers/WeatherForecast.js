'use strict'

const Controller = require('./Base'),
  HttpError = require('standard-http-error')

class WeatherForecast extends Controller {
  async show(req) {
    if (!req.query.woeid) {
      throw new HttpError(400, 'woeid is not provided')
    }
    return {
      result: await this.services.weatherForecastProvider.getWeatherForecast(req.query.woeid)
    }
  }
}

module.exports = WeatherForecast
