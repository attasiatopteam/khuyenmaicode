const express = require('express')
const Router = express.Router()
const {
    jun88,
    hi88
}=require('../controllers/addpoint.controller')

Router.route('/jun88').post(jun88)
Router.route('/hi88').post(hi88)

module.exports = Router