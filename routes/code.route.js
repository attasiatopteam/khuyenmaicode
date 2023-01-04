const express = require('express')
const asyncHandle= require("../middlewares/async.middleware")
const Router = express.Router()
const role = require('../middlewares/role.middleware')
const roleType = require('../const/role')
const {
    uploadCode,
    findCode,
    updateCode,
    deleteCode
} = require('../controllers/code.controllers')
const auth = require('../middlewares/auth.middleware')

Router.route('/').get(asyncHandle(auth),role([roleType.SUPERADMIN,roleType.ADMIN,roleType.USER]),findCode)
.post(asyncHandle(auth),role([roleType.SUPERADMIN,roleType.ADMIN]),uploadCode)
.patch(asyncHandle(auth),role([roleType.SUPERADMIN,roleType.ADMIN,roleType.USER]),updateCode)
.delete(deleteCode)

module.exports = Router