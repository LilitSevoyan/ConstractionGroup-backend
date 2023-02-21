const RoomType = require("../models/building")

class floorService {
    async getFloorHouses(floor) {
        let obj = {}
        let newFilterArray = []

        let findFloor = await RoomType.find({floor})
        
        findFloor.map((item) => {
            let number = item.houseNumber.split("-")[1].split("(")[0]
            obj[item.houseNumber] = Number(number)
        })

        const sortable = Object.fromEntries(
            Object.entries(obj).sort(([,a],[,b]) => a-b)
        )
        for (let key in sortable) {
            findFloor.map((item) => {
                if (sortable[item.houseNumber] === sortable[key]) {
                    newFilterArray.push(item)
                }
            })
        }
        return newFilterArray
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