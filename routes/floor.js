const express = require('express')
const router = express.Router()
const RoomType = require("../models/building")

router.get("/house/:floor",async(req,res)=>{
    try{
        const {floor} = req.params
        let f = await RoomType.aggregate([
            {$match :{floor: +floor}}
        ])
        res.json(f)
    }catch(error){
        res.status(500).json({err:error})
    }
})
router.get("/house/forsale/:floor",async(req,res)=>{
    try{
        const {floor} = req.params
        let f = await RoomType.aggregate([
            {$match :{floor: +floor}},
            {$match:{badge:"Առկա"}},
            {$count:"count"}
        ])
        res.json(f)
    }catch(error){
        res.status(500).json({err:error})
    }
})




router.get("/rooms/:count",async(req,res)=>{
    try{
        const {count} = req.params
        let room = await RoomType.aggregate([
            { $match:{roomsCount:+count}}
        ])
        res.json(room)
    }catch(err){
        res.status(500).json({err:err})

    }
})
module.exports = router