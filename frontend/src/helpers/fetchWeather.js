import getGeoLocation from './getGeoLocation'
import { userLocation, weatherForecast } from '../api'

export default async function fetchWeather(setProgress, setWeather) {
  setProgress(true)

  // Get geo location from browser API, ignore errors
  let geoPosition
  try {
    geoPosition = await getGeoLocation()
  } catch(err) {
    console.warn(err)
  }

  // Find user's location in server (by browser geo location or by ip)
  let location
  try {
    location = await userLocation.getData({
      latitude: geoPosition && geoPosition.coords.latitude,
      longitude: geoPosition && geoPosition.coords.longitude
    })
  } catch(err) {
    setProgress(false)
    throw err
  }

  // Get weather from server
  try {
    const weather = await weatherForecast.getData({
      woeid: location.woeid
    })
    setWeather(weather)
    setProgress(false)
  } catch(err) {
    setProgress(false)
    throw err
  }
}