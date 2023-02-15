const express = require("express")
const router = express.Router()
const ContactModel = require("../../models/contact")


router.get("/",async(req,res)=>{
    try{
        let allMessage = await ContactModel.find({})
        res.json(allMessage)
    }
    catch(err){
        res.json({error:err})
    }
})
router.post("/",async(req,res)=>{
    try{
        const sendMessage = await ContactModel({
            ...req.body
        })
        await sendMessage.save()
        res.status(201).json({sendMessage})

    }
    catch(err){
        res.status(500).json({err:error})
    }
})

module.exports = router