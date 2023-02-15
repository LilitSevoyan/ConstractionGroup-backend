const mongoose = require("mongoose")
const SubscribeModel = new mongoose.Schema({
   email:{type: String, required: true, unique: true }

})

module.exports = mongoose.model("Subscribe",SubscribeModel)