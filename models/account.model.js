const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const role = require('../const/role')
const roleType = Object.values(role)
const accountSchema = mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    password:String,
    role:{
        type:String,
        default:"user"
    },
    site:String
})

accountSchema.pre("save", function(next){
    const account= this;
    if (account.password){
      account.password= bcryptjs.hashSync(account.password, 10)
    }
    console.log(!roleType.includes(account.role))
    if(account.role!="user"){  
      if(!roleType.includes(account.role)){
          account.role= "user"
      }
    }
    next();
  })
  
  accountSchema.pre("findOneAndUpdate", function(next){
    const account= {...this.getUpdate()}
    if (account.password){
      account.password= bcryptjs.hashSync(account.password, 10)
    }
    this.setUpdate(account)
    next()
  })

module.exports = mongoose.model("account",accountSchema)