const { query } = require('express')
const daNhanKm = require('../models/danhankm.model')

module.exports = {
    postPlayer: async(req, res, next) => {
        let {...body} = req.body
        try {
            let post = await daNhanKm.create(body)
            res.json(post)
        } catch (error) {
            res.json({
                code:502,
                mess:"Bad Gateway",
                err: error
            })
        }
    },

    findPlayer: async(req, res, next) => {
        let {...query} = req.query
        try {
            let findPlayer = await daNhanKm.find(query)
            if(findPlayer.player){
                res.json({
                    code: 200,
                    info: findPlayer
                })
            }else if(!findPlayer.player) {
                res.json({
                    code: 403
                })
            }

        } catch (error) {
            res.json({
                code: 403,
                err: error
            })
        }
    }
}