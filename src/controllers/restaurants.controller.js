const express = require('express')
const Restaurant = require('../models/restaurants.model')
const router = express.Router()

router.post("",async(req,res)=>{
    try{
        const restaurant = await Restaurant.create(req.body)
        res.status(201).send(restaurant)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.get("",async(req,res)=>{
    try{
        const restaurants = await Restaurant.find().lean().exec()
        res.status(200).send(restaurants)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})
router.patch("/:id",async(req,res)=>{
    try{
        const restaurant = await Restaurant.findOneAndUpdate({id:req.params.id},req.body,{new:true}).lean().exec()
        res.status(200).send(restaurant)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const restaurant = await Restaurant.findOneAndDelete({id:req.params.id})
        res.status(200).send(restaurant)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router