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
Router.route('/').get(auth,getAcc).patch(auth,updateAcc).delete(auth,deleteAcc)
Router.route('/register').post(auth,role([roleType.SUPERADMIN]),createAcc)
Router.route('/login').post(login)

module.exports = Router