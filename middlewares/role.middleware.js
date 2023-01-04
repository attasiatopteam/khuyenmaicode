module.exports= (roles=[])=>{
  if (typeof roles==='string'){
    roles= [roles]
  }
  return (req, res, next) => {
    console.log(req.account.role)
    if (roles.length && !roles.includes(req.account.role)) {
      res.json({
        statusCode: 405,
        valid:false,
        mess: "Account not allowed"
      })
    }else{
        next()
    }
  };
}