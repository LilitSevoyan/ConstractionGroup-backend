const express = require('express')
const router = express.Router()
const RoomType = require("../models/building")
const path = require("path");
const upload = require("./multer/multer")


const URL = process.env.BACKEND_URL


router.get("/",async (req,res)=>{
    try{
        let allRoom = await RoomType.aggregate([
            {$match:{floor:{$gte:3}}},
            {$sort:{floor:1}}
        ])
        res.json(allRoom)
    }
    catch(err){
        res.json({errMessage:err})
    }
})

      




router.post("/",upload.single("poster"), async(req, res) => {    
    try {
        console.log(req.file);
        const newRoom = await new RoomType({
            ...req.body,poster:URL + req.file.filename
        })
        await newRoom.save();
      
        res.status(201).json({newRoom})
    } catch (error) {
        console.log(error)
        res.status(500).json({err:error})
    }
})

//router.get('/getPdf', (req, res) =>{
//    
//    res.download("../upload");
// });
 router.get('/getPdf/:img', function(req, res) {
    const {img} = req.params
    console.log(img)
    const file = `${process.cwd()}/upload/${img}`;

    res.download(file);
 });


//router.post("/officeArea",upload.single("poster"), async(req, res) => {    
//    try {
//        console.log(req.file);
//        const newRoom = await new officeArea({
//            ...req.body,poster:URL + req.file.filename
//        })
//        await newRoom.save();
//      
//        res.status(201).json({newRoom})
//    } catch (error) {
//        console.log(error)
//        res.status(500).json({err:error})
//    }
//})


router.get("/floor/:floor",async (req,res)=>{
    try{
        const {floor} = req.params
        let Floors = await RoomType.aggregate([{ $match: {floor: +floor }}])
        res.json(Floors)
    }
    catch(err){
        res.json({errMessage:err})
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
router.get("/sort/price/:min/:max",async(req,res)=>{
    try{
        const {min,max} = req.params
        let minPrice = await RoomType.aggregate([
            {$match:{ $and: [{price:{$gte:+min}}, {price:{$lte:+max}}]}},
           
        ])
       res.json(minPrice)
    }catch(err){
        res.status(500).json({err:err})

    }
})

 


router.get("/sort/price/:min",async(req,res)=>{
    try{
        const {min} = req.params
        let minPrice = await RoomType.aggregate([
            {$match:{price:{$gte:+min}}},
           
        ])
       res.json(minPrice)
    }catch(err){
        res.status(500).json({err:err})

    }
})

router.get("/price/sort/max/:price",async(req,res)=>{
    try{
        const {price} = req.params
        let maxPrice = await RoomType.aggregate([
            { $match:{price:{$lte:+price}}}
        ])
        console.log(maxPrice);
        res.json(maxPrice)
    }catch(err){
        res.status(500).json({err:err})

    }
})

router.get("/id/:id",async(req,res)=>{
    try{
        const {id} = req.params
        const findId = await RoomType.findById(id)
        res.json(findId)
    }catch(error){
        res.status(500).json({err:error})
    }
})


router.get("/area/sort/max/:max",async(req,res)=>{
    try{
        const {max} = req.params
        let maxArea = await RoomType.aggregate([
            { $match:{area:{$lte:+max}}}
        ])
        res.json(maxArea)
    }catch(err){
        res.status(500).json({err:err})

    }
})
router.get("/sort/area/:min",async(req,res)=>{
    try{
        const {min} = req.params
        let minArea = await RoomType.aggregate([
            {$match:{area:{$gte:+min}}},
           
        ])
       res.json(minArea)
    }catch(err){
        res.status(500).json({err:err})

    }
})
router.get("/sort/area/:min/:max",async(req,res)=>{
    try{
        const {min,max} = req.params
        let area = await RoomType.aggregate([
            {$match:{ $and: [{area:{$gte:+min}}, {area:{$lte:+max}}]}},
           
        ])
       res.json(area)
    }catch(err){
        res.status(500).json({err:err})

    }
})

module.exports = router