const mongoose = require('mongoose');

const marketSchema = new mongoose.Schema({
    id:{type:String, required: true,unique:true},
    name:{type:String, required: true},
    location:{type:String, required: true},
    distance:{type:String, required: true},
    image:{type:String, required: true}
})

const Market = mongoose.model("market",marketSchema)

module.exports = Market

