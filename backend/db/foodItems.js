const mongoose = require('mongoose')

var foodItems = new mongoose.Schema({
    _id: String,
    CategoryName: String,
    name: String,
    img: String,
    options:[],
    description: String
})

module.exports = mongoose.model('fooditems', foodItems);