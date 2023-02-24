const RoomType = require("../models/building")

class buildingService {
    async getAllHouses({page = 1, limit = 1000}) {
        const count = await RoomType.aggregate([
            { $match: { floor: { $gte: 3 } } }
        ])
        const skip = (Number(page) - 1) * Number(limit)
        let allHouses = await RoomType.aggregate([
            { $match: { floor: { $gte: 3 } } },
            { $sort: { floor: 1 } },
            { $skip: skip },
            {$limit:Number(limit)}
        ])
        return {count: count.length, allHouses}
    }

    async createHouse(body, file) {
        const newHouse = await new RoomType({
            ...body, poster:URL + file.filename
        })
        await newHouse.save()
        return newHouse
    }

    async getPdf(img) {
        const file = `${process.cwd()}/upload/${img}`
        return file
    }

    async getFloorHouses(floor) {
        let floors = await RoomType.aggregate([{ $match: {floor: +floor }}])
        return floors
    }

    async getHousesByRoomsCount(count) {
        let room = await RoomType.aggregate([
            {$match:{roomsCount:+count}}
        ])
        return room
    }

    async getPriceBetween(min, max) {
        let minPrice = await RoomType.aggregate([
            {$match:{ $and: [{price:{$gte:+min}}, {price:{$lte:+max}}]}},
        ])
        return minPrice
    }

    async getFilterByMinPrice(min) {
        let minPrice = await RoomType.aggregate([
            {$match:{price:{$gte:+min}}},
        ])
        return minPrice
    }

    async getFilterByMaxPrice(price) {
        let maxPrice = await RoomType.aggregate([
            { $match:{price:{$lte:+price}}}
        ])
        return maxPrice
    }

    async getOne(id) {
        const findId = await RoomType.findById(id)
        return findId
    }

    async getAreaBetween(min, max) {
        let area = await RoomType.aggregate([
            {$match:{ $and: [{area:{$gte:+min}}, {area:{$lte:+max}}]}},
        ])
        return area
    }

    async getFilterByMinArea(min) {
        let minArea = await RoomType.aggregate([
            {$match:{area:{$gte:+min}}},
        ])
        return minArea
    }
    
    async getFilterByMaxArea(max) {
        let maxArea = await RoomType.aggregate([
            { $match:{area:{$lte:+max}}}
        ])
        return maxArea

    }
    
}

module.exports = new buildingService()