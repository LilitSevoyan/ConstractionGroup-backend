const RoomType = require("../models/building")

class floorService {
    async getFloorHouses(floor) {
        let houses = await RoomType.aggregate([
            {$match :{floor: +floor}}
        ])
        return houses
    } 

    async getFloorHousesForsale(floor) {
        let housesForsale = await RoomType.aggregate([
            {$match :{floor: +floor}},
            {$match:{badge:"Առկա"}},
            {$count:"count"}
        ])
        return housesForsale
    }

    async getHousesByRoomsCount(count) {
        let room = await RoomType.aggregate([
            {$match:{roomsCount:+count}}
        ])
        return room
    }
}

module.exports = new floorService()