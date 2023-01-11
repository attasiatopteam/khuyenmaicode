const account = require('./account.route')
const code = require('./code.route')
const addpoint = require('../routes/addpoint.route')
const auth = require('./auth.router')
const daNhanKm = require('./daNhanKm.route')
module.exports = (app)=>{
    app.use('/account',account)
    app.use('/code',code)
    app.use('/addpoint',addpoint)
    app.use('/auth',auth)
    app.use('/nhankm', daNhanKm)
}