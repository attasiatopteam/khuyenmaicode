const express = require('express')
const connectDb = require('./config/database')
const Router = require('./routes')
const app = express()
const cors = require('cors')

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended:true}));
app.use(cors())
connectDb()
Router(app)

app.listen('5000', ()=> console.log("Server working in port 5000"))