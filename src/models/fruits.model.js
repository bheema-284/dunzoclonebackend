const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    id:{type:String, required: true,unique:true},
    title:{type:String, required: true},
    price:{type:String, required: true},
    image:{type:String, required: true}
},
{
    versionKey:false,
    timestamps:true
})

const Fruit = mongoose.model("fruit",fruitSchema)

module.exports = Fruit