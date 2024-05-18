const mongoose = require('mongoose');

const URI ="mongodb+srv://ranjithkb34:mite123@cluster0.5mm0pup.mongodb.net/goodDB?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async() =>{
    await mongoose.connect(URI);
    console.log("connected to DB");
}

module.exports = connectDB;