const mongoose = require("mongoose")

const ContactModel = new mongoose.Schema({
    fullName:{type:String,required: true},
    email:{type:String,required: true},
    phoneNumber:{type:Number,required: true},
    message:{type:String,required:true}
})
module.exports = mongoose.model("Contact",ContactModel)