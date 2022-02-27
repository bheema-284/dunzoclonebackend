const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    id:{type:String, required: true,unique:true},
    title:{type:String, required: true },
    price:{type:String, required: true},
    image:{type:String, required: true}
},
{
    versionKey:false,
    timestamps:true
})

const Restaurant = mongoose.model("restaurant",restaurantSchema)

module.exports = Restaurant