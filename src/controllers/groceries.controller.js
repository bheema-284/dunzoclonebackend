const express = require('express')
const Grocery = require('../models/groceries.model')
const router = express.Router()

router.post("",async(req,res)=>{
    try{
        const grocery = await Grocery.create(req.body)
        console.log(grocery)
        res.status(201).send(grocery)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

router.get("",async(req,res)=>{
    try{
        const groceries = await Grocery.find().lean().exec()
        res.status(200).send(groceries)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})
router.patch("/:id",async(req,res)=>{
    try{
        const grocery = await Grocery.findOneAndUpdate({id:req.params.id},req.body,{new:true}).lean().exec()
        res.status(200).send(grocery)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const grocery = await Grocery.findOneAndDelete({id:req.params.id})
        res.status(200).send(grocery)
    }catch(err){
        return res.status(500).send({message: err.message})
    }
})

module.exports = router