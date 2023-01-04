const code = require('../models/code.model')
module.exports = {
    uploadCode: async(req,res,next)=>{
        try {
            let upload = req.body.forEach(async element => {
                let process = await code.collection.insertMany(element).exec()
                console.log(process)
            }); 
            res.json(upload)
        } catch (error) {
            res.json(error)
        }
    },
    findCode: async(req,res,next)=>{
        let {...query} = req.query
        try {
            let findCode = await code.find(query).exec()
            res.json(findCode)
        } catch (error) {
            res.json(error)
        }
    },
    updateCode: async(req,res,next)=>{
        let {...body} = req.body
        try {
            let updateCode = await code.findOneAndUpdate({code_string:body.code_string},body,{new:true}).exec()
            res.json(updateCode)
        } catch (error) {
            res.json(error)
        }
    },
    deleteCode: async(req,res,next)=>{
        let {...body} = req.body
        try {
            let del = await code.deleteMany(body)
            res.json(del)
        } catch (error) {
            res.json(error)
        }
    }
}