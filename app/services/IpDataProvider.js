'use strict'

const request = require('request-promise-native')

class IpDataProvider {
  constructor(apiKey) {
    this.apiKey = apiKey
  }

  static get API_HOST() {
    return 'https://api.ipgeolocation.io'
  }

  static get IP_GEO_URI() {
    return '/ipgeo'
  }

  getGeo(ip) {
    return request({
      uri: IpDataProvider.API_HOST + IpDataProvider.IP_GEO_URI,
      qs: {
        apiKey: this.apiKey,
        ip
      },
      json: true
    })
  }

  _checkError(response) {
    if (response.error) {
      throw new Error(response.error)
    } else {
      return response
    }
  }
}

module.exports = IpDataProvider