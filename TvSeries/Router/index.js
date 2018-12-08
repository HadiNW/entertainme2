const express = require('express');
const Router = express.Router()
const TVController = require('../Controllers/TVController')

Router.get('/tv', TVController.getAll)
Router.post('/tv', TVController.create)
Router.delete('/tv/:id', TVController.delete)
Router.put('/tv/:id', TVController.update)

module.exports = Router