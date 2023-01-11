const express = require('express')
const Router = express.Router()
const {
    postPlayer,
    findPlayer
} = require('../controllers/daNhanKm.controller')

Router.route('/post-player-km').post(postPlayer)
Router.route('/find-player-km').get(findPlayer)

module.exports = Router