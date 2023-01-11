const mongoose = require('mongoose')

const daNhanKmSchema = mongoose.Schema({
    player: String,
    promo: String,
    point: String,
    code_string: String
}, { timestamps: true })

module.exports = mongoose.model('daNhanKm', daNhanKmSchema)