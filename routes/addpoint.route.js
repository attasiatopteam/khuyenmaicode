const express = require('express')
const Router = express.Router()
const {
    jun88,
    hi88
}=require('../controllers/addpoint.controller')


Router.route('/hi88').post(hi88)
Router.route('/jun88').post(jun88)

module.exports = Router