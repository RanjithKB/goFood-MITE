const mongoose = require('mongoose');

var categories = new mongoose.Schema({
    _id: String,
CategoryName: String
})

module.exports = mongoose.model('categories', categories);