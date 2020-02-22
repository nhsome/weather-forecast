'use strict'

module.exports = [
  {
    path: '/weather-forecast',
    method: 'get',
    controller: 'WeatherForecast',
    action: 'show',
  },
  {
    path: '/user-location',
    method: 'get',
    controller: 'UserLocation',
    action: 'show',
  }
]
