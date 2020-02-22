module.exports = {
  server: process.env.SERVER || '',
  serverPort: process.env.SERVER_PORT,
  indexRoute: '/api/1.0',
  devExternalIp: process.env.DEV_EXTERNAL_IP,
  ipData: {
    apiKey: process.env.IP_DATA_API_KEY
  }
}
