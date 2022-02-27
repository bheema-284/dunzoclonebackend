const express = require('express')
const  Market = require("../models/market.model")
const router = express.Router()

router.post("",async(req,res)=>{
    try{
        const market = await Market.create(req.body)
        return res.status(201).send(market)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.get("",async(req,res)=>{
    try{
        const markets = await Market.find().lean().exec()
        return res.send(markets)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.patch("/:id",async(req,res)=>{
    try{
        const market = await Market.findOneAndUpdate({id:req.params.id},req.body,{new:true}).lean().exec()
        return res.send(market)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const market = await Market.findOneAndDelete({id:req.params.id})
        return res.send(market)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router