'use strict'

const request = require('request-promise-native')

class WeatherForecastProvider {
  constructor() {
  } // in the future may needs credentials for api access

  static get API_BASE() {
    return 'https://www.metaweather.com/api'
  }

  static get SEARCH_LOCATION_URI() {
    return '/location/search/'
  }

  searchLocation(locationCoords) {
    return request({
      uri: WeatherForecastProvider.API_BASE + WeatherForecastProvider.SEARCH_LOCATION_URI,
      qs: {
        lattlong: `${ locationCoords.latitude },${ locationCoords.longitude }`
      },
      json: true
    })
  }

  getWeatherForecast(woeid) {
    return request({
      uri: WeatherForecastProvider.API_BASE + `/location/${ woeid }/`,
      json: true
    })
  }
}

module.exports = WeatherForecastProvider