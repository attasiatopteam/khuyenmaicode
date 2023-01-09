const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const role = require('../const/role')
const roleType = Object.values(role)
const QRCode = require('qrcode');
const { authenticator } = require('otplib');
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
    site:String,
    authenticator:String,
    authenticatorQr:String
})

accountSchema.pre("save", async function(next){
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
  let secretCode = authenticator.generateSecret();
  account.authenticator = secretCode
  let qrCodeStr = `otpauth://totp/${account.site}?secret=${secretCode}&issuer=${account.username}`;
  let qrcode = await QRCode.toDataURL(qrCodeStr);
  account.authenticatorQr = qrcode
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