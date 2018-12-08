const express = require('express');
const Router = express.Router()
const Controller = require('../Controllers/Controller')

Router.get('/entertainme', Controller.getAllUseRedis)
Router.post('/entertainme/movies', Controller.createMovie)
Router.post('/entertainme/tv', Controller.createTV)

module.exports = Router