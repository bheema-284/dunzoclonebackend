const express = require('express')
const Vegetable = require('../models/vegetables.model')
const router = express.Router()

router.post("",async(req,res)=>{
    try{
        const vegetable = await Vegetable.create(req.body)
        res.status(201).send(vegetable)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.get("",async(req,res)=>{
    try{
        const vegetables = await Vegetable.find().lean().exec()
        res.status(200).send(vegetables)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})
router.patch("/:id",async(req,res)=>{
    try{
        const vegetable = await Vegetable.findOneAndUpdate({id:req.params.id},req.body,{new:true}).lean().exec()
        res.status(200).send(vegetable)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const vegetable = await Vegetable.findOneAndDelete({id:req.params.id})
        res.status(200).send(vegetable)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router