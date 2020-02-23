import getGeoLocation from './getGeoLocation'
import { userLocation, weatherForecast } from '../api'

export default async function fetchWeather() {
  // Get geo location from browser API, ignore errors
  const geoPosition = await getGeoLocation()

  // Find user's location in server (by browser geo location or by ip)
  const location = await userLocation.getData({
    latitude: geoPosition && geoPosition.coords.latitude,
    longitude: geoPosition && geoPosition.coords.longitude
  })

  // Get weather from server
  return weatherForecast.getData({
    woeid: location.woeid
  })
}
