'use strict'

const Controller = require('./Base'),
  _ = require('lodash'),
  HttpError = require('standard-http-error')

class UserLocation extends Controller {
  async show(req) {
    const locationCoords = await this._getLocationCoords(req)
    const searchResult = await this.services.weatherForecastProvider.searchLocation(locationCoords)
    if (!searchResult.length) {
      throw new HttpError(404, 'Not found user location')
    }
    return { result: searchResult[0] } // Nearest location
  }

  async _getLocationCoords(req) {
    if (req.query.latitude && req.query.longitude) {
      return _.pick(req.query, ['latitude', 'longitude'])
    }

    // Not found input coordinates, let's find it by IP
    const ipData = await this.services.ipDataProvider.getGeo(req.resolvedIp)
    if (!ipData.latitude || !ipData.longitude) {
      throw new HttpError(500, 'Something went wrong while get ip data')
    }
    return _.pick(ipData, ['latitude', 'longitude'])
  }
}

module.exports = UserLocation