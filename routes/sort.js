const express = require('express')
const router = express.Router()
const RoomType = require("../models/building")


router.get("/priceDecrease",async(req,res)=>{
    try{
        let maxPrice = await RoomType.aggregate([
            {$match:{floor:{$gte:3}}},
            {$sort :{price:-1}}
        ])
        res.json(maxPrice)
    }catch(error){
        res.status(500).json({err:error})
    }
})
router.get("/areaeDecrease",async(req,res)=>{
    try{
        let maxPrice = await RoomType.aggregate([
            {$match:{floor:{$gte:3}}},
            {$sort :{price:-1}}
        ])
        res.json(maxPrice)
    }catch(error){
        res.status(500).json({err:error})
    }
})
router.get("/roomsCountDecrease",async(req,res)=>{
    try{
        let maxPrice = await RoomType.aggregate([
            {$match:{floor:{$gte:3}}},
            {$sort :{roomsCount:-1}}
        ])
        res.json(maxPrice)
    }catch(error){
        res.status(500).json({err:error})
    }
})

router.get("/priceIncrease",async(req,res)=>{
    try{
        let minPrice = await RoomType.aggregate([
            {$match:{floor:{$gte:3}}},
            {$sort: { area: 1 }}
                //{$project: {price:1, _id:1}}
        ])
       res.json(minPrice)
    }catch(err){
        res.status(500).json({err:err})

    }
})
router.get("/areaIncrease",async(req,res)=>{
    try{
        let minPrice = await RoomType.aggregate([
            {$match:{floor:{$gte:3}}},
            {$sort: { area: 1 }}
            //{$project: {price:1, _id:1}}
        ])
       res.json(minPrice)
    }catch(err){
        res.status(500).json({err:err})

    }
})

router.get("/roomsCountIncrease",async(req,res)=>{
    try{
        let minPrice = await RoomType.aggregate([
            {$match:{floor:{$gte:3}}},
            {$sort: { roomsCount: 1 }}
            //{$project: {price:1, _id:1}}
        ])
       res.json(minPrice)
    }catch(err){
        res.status(500).json({err:err})

    }
})


module.exports = router