const express = require('express')
const role = require('../middlewares/role.middleware')
const roleType =require('../const/role')
const Router = express.Router()
const {
    postPlayer,
    findPlayer
} = require('../controllers/daNhanKm.controller')
const auth = require('../middlewares/auth.middleware')
Router.route('/post-player-km').post(auth,role([roleType.SUPERADMIN]), postPlayer)
Router.route('/find-player-km').get(auth,role([roleType.SUPERADMIN]), findPlayer)

module.exports = Router