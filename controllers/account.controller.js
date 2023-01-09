const accountmodel = require('../models/account.model')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const QRCode = require('qrcode');
const { authenticator } = require('otplib');

module.exports = {
    createAcc: async(req,res,next)=>{
        let {...body} = req.body
        try {
            let create = await accountmodel.create(body)
            res.json(create)
        }catch(error){
            res.json({
                code:502,
                mess:"Bad Gateway",
                err: error
            })
        }        
    },
    login: async(req,res,next)=>{
        let {...body} = req.body
        let account = await accountmodel.findOne({username:body.username}).exec()
        if(!account){
            res.json({
                code:404,
                mess:"Không tìm thấy tài khoản",
            })
        }else{
            console.log(account.password+" - "+body.password)
            let check = bcryptjs.compareSync(body.password,account.password)
            console.log(check)
            let token = account.authenticator;
            if(check){
                let isValid = authenticator.check(body.authcode, token); 
                if (!isValid) {
                    res.json({
                        statuscode: 404,
                        valid:false,
                        mess:"Mã Token Không Chính Xác",
                    })
                }else{
                    let token = jwt.sign({
                        _id:account._id,
                        username:account.username,
                        role:account.role,
                        site:account.site
                    },"abcxyz", {expiresIn: "5h"})
                    res.json({
                        _id:account._id,
                        username:account.username,
                        role:account.role,
                        site:account.site,
                        token:token
                    })
                }
            }else{
                res.json({
                    code:403,
                    mess:"Mật khẩu không chính xác",
                })
            }
        }
    },
    getAcc: async(req,res,next)=>{
        let {...query} = req.query
        try {
            let read = await accountmodel.find(query)
            res.json(read)
        } catch (error) {
            res.json({
                code:502,
                mess:"Bad Gateway",
                err: error
            })
        }        
    },
    updateAcc: async(req,res,next)=>{
        let {...body} = req.body
        try {
            let update = await accountmodel.findOneAndUpdate({username:body.username},body,{new:true})
            if(update){
                res.json(update)
            }else{
                let create = await accountmodel.create(body)
                res.json(create)
            }
        } catch (error) {
            res.json({
                code:502,
                mess:"Bad Gateway",
                err: error
            })
        }        
    },
    deleteAcc: async(req,res,next)=>{
        let {...body} = req.body
        try {
            let del = await accountmodel.deleteMany(body)
            res.json(del)
        } catch (error) {
            res.json({
                code:502,
                mess:"Bad Gateway",
                err: error
            })
        }        
    }
}