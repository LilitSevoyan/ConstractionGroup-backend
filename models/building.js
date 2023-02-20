const mongoose = require("mongoose")

const RoomTypeModel = new mongoose.Schema({
    type: {type: String, required: true, enum : ["Բնակարան","Գրասենյակային տարածք","Ավտոկայանատեղի"], default: "Բնակարան"},
    houseNumber: {type: String, required: true, unique: true},
    badge: {type:String, enum: ['Վաճառված','Առկա','Ամրագրված'], default: 'Առկա'},
    
    area: {required: true, type: Number},
    floor: {required: true, type: Number},
    roomsCount: {type: Number},
    livingroom: {type: Number},
    kitchen: {type: Number},
    corridor: {type: Number},
    wardrobe: {type: Number},

    balconys: [{balcony: {type: Number}}],
    bathrooms: [{bathroom: {type: Number}}],
    rooms: [{room: {type: Number}}],
    
    price: {required: true, type: Number},
    poster: {required: true, type: String}
    
})

module.exports = mongoose.model("apartment", RoomTypeModel)

