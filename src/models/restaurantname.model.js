const mongoose = require('mongoose');


const restaurantnameSchema = new mongoose.Schema({
    id:{type:String, required: true,unique:true},
    name:{type:String, required: true},
    location:{type:String, required: true},
    distance:{type:String, required: true},
    image:{type:String, required: true}
},
{
    versionKey:false,
    timestamps:true
})

const Restaurantname = mongoose.model('restaurantname',restaurantnameSchema)
module.exports = Restaurantname