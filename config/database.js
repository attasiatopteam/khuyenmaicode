const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
const connectDb = async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1/khuyenmaicode')
        // await mongoose.connect('mongodb+srv://irisattapp:Rythermbk98@cluster0.1p1h1vm.mongodb.net/khuyenmaicodetest?retryWrites=true&w=majority')
        console.log("Connect database successfully")
    } catch (error) {
        console.log({
            status: 502,
            mess: "Bad Gateway",
            error: error
        })
    }
}

//addnew new 
module.exports = connectDb