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
            { $limit: Number(limit) }
        ])
        return {count: count.length, allHouses}
    }

    async getFilterHouses({page = 1, limit = 1000, badge, floor, room, price_min, price_max, area_min, area_max, sort}) {
        
        const skip = (Number(page) - 1) * Number(limit)
        let match = {}
        let sortObj = {}

        if (badge) {
            match.badge = badge
        }

        if (floor) {
            match.floor = parseInt(floor)
        }

        if (room) {
            match.roomsCount = parseInt(room)
        }

        if (price_max && price_min) {
            match.$and = [{price: {$gte:+price_min}}, {price:{$lte:+price_max}}]
        } else if (price_min) {
            match.price = {$gte:+price_min}
        }else if (price_max) {
            match.price = {$lte:+price_max}
        }

        if (area_max && area_min) {
            match.$and = [{area: {$gte:+area_min}}, {area:{$lte:+area_max}}]
        } else if (area_min) {
            match.area = {$gte:+area_min}
        }else if (area_max) {
            match.area = {$lte:+area_max}
        }

        if (sort) {
            if (sort === "priceIncrease") {
                sortObj.price = 1
            } else if (sort === "priceDecrease") {
                sortObj.price = -1
            } else if (sort === "areaIncrease") {
                sortObj.area = 1
            } else if (sort === "areaDecrease") {
                sortObj.area = -1
            } else if (sort === "roomsCountIncrease") {
                sortObj.roomsCount = 1
            } else if (sort === "roomsCountDecrease") {
                sortObj.roomsCount = -1
            }
        } else {
            sortObj.price = -1
        }

        const count = await RoomType.aggregate([
            { $match: match }
        ])
        const filter = await RoomType.aggregate([
            { $match: match },
            { $sort: sortObj },
            { $skip: skip },
            { $limit: Number(limit) }
        ])
        return {count: count.length, filter}
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