const express = require('express')
const role = require('../middlewares/role.middleware')
const roleType =require('../const/role')
const Router = express.Router()
const auth = require('../middlewares/auth.middleware')

Router.route('/').get(auth,(req,res,next)=>{
    res.json({
        _id:req.account._id,
        username:req.account.username,
        role:req.account.role,
        site:req.account.site
    })
})

module.exports = Router