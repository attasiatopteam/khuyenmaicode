const express = require('express')
const connectDb = require('./config/database')
const Router = require('./routes')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))
connectDb()
Router(app)

app.listen('5000', ()=> console.log("Server working in port 5000"))