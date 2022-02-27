const mongoose = require("mongoose")

const connect = ()=>{
    return mongoose.connect("mongodb+srv://sid283:sid_283@cluster0.cbay8.mongodb.net/dunzobackend?retryWrites=true&w=majority")
}

module.exports = connect