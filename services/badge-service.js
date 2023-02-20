const RoomType = require("../models/building")

class badgeService {
    async getAllBadgeType(badge) {
        let forSale = await RoomType.aggregate([
            {$match:{floor:{$gte:3}}},
            {$match :{badge:badge}}
        ])
        return forSale
    }

    async getBadgeTypeCount() {
        let sold = await RoomType.aggregate([
            {$match :{badge:"Առկա"}},
            { $count: "sold"}
        ])
        let reserved = await RoomType.aggregate([
            {$match :{badge:"Ամրագրված"}},
            { $count: "reserved"}
        ])
        return [sold,reserved]
    }

    async getReservedCount() {
        let reserved = await RoomType.aggregate([
            {$match :{badge:"Ամրագրված"}},
            { $count: "count"}
        ])
        return reserved
    }

}

module.exports = new badgeService()