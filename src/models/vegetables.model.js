const mongoose = require('mongoose');

const vegetableSchema = new mongoose.Schema({
    id:{type:String, required: true,unique:true},
    title:{type:String, required: true },
    price:{type:String, required: true},
    image:{type:String, required: true}
},
{
    versionKey:false,
    timestamps:true
})

const Vegetable = mongoose.model("vegetable",vegetableSchema)

module.exports = Vegetable