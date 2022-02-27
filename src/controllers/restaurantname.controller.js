const express = require('express')
const Restaurantname = require("../models/restaurantname.model")
const router = express.Router()

router.post("",async(req,res)=>{
    try{
        const restaurantname = await Restaurantname.create(req.body)
        return res.status(201).send(restaurantname)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.get("",async(req,res)=>{
    try{
        const restaurantnames = await Restaurantname.find().lean().exec()
        return res.send(restaurantnames)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const restaurantname = await Restaurantname.findOneAndUpdate({id:req.params.id},req.body,{new:true}).lean().exec()
        return res.send(restaurantname)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const restaurantname = await Restaurantname.findOneAndDelete({id:req.params.id})
        return res.send(restaurantname)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router