const express = require('express')
const router = express.Router()
const RoomType = require("../models/building")




router.get("/all/:badge",async(req,res)=>{
    try{
        const {badge} = req.params
        let forSale = await RoomType.aggregate([
            {$match:{floor:{$gte:3}}},
            {$match :{badge:badge}}
        ])
        res.json(forSale)
    }catch(error){
        res.status(500).json({err:error})
    }
})

router.get("/count",async(req,res)=>{
    try{
        let sold = await RoomType.aggregate([
            {$match :{badge:"Առկա"}},
            { $count: "sold"}
        ])
        let reserved = await RoomType.aggregate([
            {$match :{badge:"Ամրագրված"}},
            { $count: "reserved"}
        ])
        res.json([sold,reserved])
    }catch(error){
        res.status(500).json({err:error})
    }
})

router.get("/reserved",async(req,res)=>{
try{
    let reserved = await RoomType.aggregate([
        {$match :{badge:"Ամրագրված"}},
        { $count: "count"}
    ])
    res.json(reserved)
}catch(error){
    res.status(500).json({err:error})
}
})



module.exports = router