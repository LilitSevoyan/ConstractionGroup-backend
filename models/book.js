const mongoose = require("mongoose")

const BookModel = new mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: Number, required: true},
    number: {type: String, required: true}
})

module.exports = mongoose.model("Book", BookModel)