'use strict'

const express = require('express'),
  server = express(),
  bodyParser = require('body-parser'),
  resolveIp = require('../middlewares/resolveIp'),
  config = require('./config')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json({ limit: '50mb', extended: true }))

//CORS
if (process.env.NODE_ENV !== 'production') {
  server.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH')
    next()
  })
}

server.use(resolveIp(config))

module.exports = server