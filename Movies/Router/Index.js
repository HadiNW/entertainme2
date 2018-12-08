const express = require('express');
const Router = express.Router()
const MovieController = require('../Controllers/MovieController')

Router.get('/movies', MovieController.getAll)
Router.post('/movies', MovieController.create)
Router.delete('/movies/:id', MovieController.delete)
Router.put('/movies/:id', MovieController.update)

module.exports = Router