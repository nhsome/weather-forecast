const env_development = {
  NODE_ENV: 'development',
  SERVER: 'http://localhost:8080',
  SERVER_PORT: 8080,
  DEV_EXTERNAL_IP: '188.170.74.200', // for emulation ip data
  IP_DATA_API_KEY: 'API_KEY' // https://ipgeolocation.io/
}

module.exports = {
  apps: [
    {
      name: 'weather-forecast',
      script: 'index.js',
      watch: true,
      ignore_watch: [ "node_modules", "app/static", "frontend/*", ".git" ],
      // node_args: [ '--inspect' ],
      env_development
    }
  ],

  deploy: {
    production: {
      user: 'deploy',
      host: '1.1.1.1',
      ref: 'origin/master',
      repo: 'git@github.com',
      path: '/var/www/NODES/weather-forecast',
      'post-deploy': 'npm install && ' +
        'pm2 restart ecosystem.config.js --env production'
    }
  }
}
