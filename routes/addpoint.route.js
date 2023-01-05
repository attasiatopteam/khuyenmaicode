const express = require('express')
const Router = express.Router()
const {
    jun88,
    hi88,
    f8bet
}=require('../controllers/addpoint.controller')


Router.route('/hi88').post(hi88)
Router.route('/jun88').post(jun88)
Router.route('/f8bet').post(f8bet)

module.exports = Router