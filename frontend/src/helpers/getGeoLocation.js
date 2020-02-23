export default function getGeoLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) return reject(new Error('Not support'))
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}
