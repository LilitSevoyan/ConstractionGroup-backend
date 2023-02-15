const express = require('express')
const router = express.Router()
const BookModel = require("../../models/book")


router.get("/",async (req,res)=>{
    try{
        let allBook = await BookModel.find({})
        res.json(allBook)
    }
    catch(err){
        res.json({errMessage:err})
    }
})

router.post("/", async(req, res) => {    
    try {
        const BookHouse = await new BookModel({
            ...req.body
        })
        await BookHouse.save();
      
        res.status(201).json({BookHouse})
    } catch (error) {
        console.log(error)
        res.status(500).json({err:error})
    }
})
module.exports = router

