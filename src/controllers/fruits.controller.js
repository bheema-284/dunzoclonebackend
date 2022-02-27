const express = require('express')
const Fruit = require('../models/fruits.model')
const router = express.Router()

router.post("",async(req,res)=>{
    try{
        const fruit = await Fruit.create(req.body)
        res.status(201).send(fruit)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.get("",async(req,res)=>{
    try{
        const fruits = await Fruit.find().lean().exec()
        res.status(200).send(fruits)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})
router.patch("/:id",async(req,res)=>{
    try{
        const fruit = await Fruit.findOneAndUpdate({id:req.params.id},req.body,{new:true}).lean().exec()
        res.status(200).send(fruit)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const fruit = await Fruit.findOneAndDelete({id:req.params.id})
        res.status(200).send(fruit)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router