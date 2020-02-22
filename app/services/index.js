'use strict'

const WeatherForecastProvider = require('./WeatherForecastProvider'),
  IpDataProvider = require('./IpDataProvider')

module.exports = function(config) {
  return {
    weatherForecastProvider: new WeatherForecastProvider(),
    ipDataProvider: new IpDataProvider(config.ipData.apiKey)
  }
}
