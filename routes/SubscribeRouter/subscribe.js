const express = require('express')
const router = express.Router()
const SubscribeModel = require("../../models/subscribe")

router.get("/",async (req,res)=>{
    try{
        let subscribe = await SubscribeModel.find({})
        res.json(subscribe)
    }
    catch(err){
        res.json({errMessage:err})
    }
})


router.post("/", async(req, res) => {    
    try {
        const {email} = req.body
        const Subscribe = await new SubscribeModel({
            email
        })
        await Subscribe.save();
      
        res.status(201).json({Subscribe})
    } catch (error) {
        console.log(error)
        res.status(500).json({err:error})
    }
})
module.exports = router

