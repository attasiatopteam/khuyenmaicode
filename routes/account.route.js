const express = require('express')
const role = require('../middlewares/role.middleware')
const roleType =require('../const/role')
const Router = express.Router()
const {
    createAcc,
    updateAcc,
    getAcc,
    login,
    deleteAcc
} = require('../controllers/account.controller')
const auth = require('../middlewares/auth.middleware')
Router.route('/').get(auth,role([roleType.SUPERADMIN]),getAcc).patch(auth,role([roleType.SUPERADMIN]),updateAcc).delete(auth,role([roleType.SUPERADMIN]),deleteAcc)
Router.route('/register').post(auth,role([roleType.SUPERADMIN]),createAcc)
Router.route('/login').post(login)

module.exports = Router