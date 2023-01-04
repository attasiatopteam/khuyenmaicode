const mongoose = require('mongoose')

const codeSchema = mongoose.Schema({
  site:String,
  code_id:String,
  code_string:String,
  status:String,
  point:String,
  user_used:String
}, { timestamps: true })

module.exports = mongoose.model("code",codeSchema)