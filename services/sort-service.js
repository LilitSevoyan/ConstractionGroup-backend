const RoomType = require("../models/building")

class sortService {
    async sortByPriceDecrease() {
        let decrease = await RoomType.aggregate([
            {$match:{floor:{$gte:3}}},
            {$sort :{price:-1}}
        ])
        return decrease
    }

    async sortByAreaDecrease() {
        let decrease = await RoomType.aggregate([
            {$match:{floor:{$gte:3}}},
            {$sort :{area:-1}}
        ])
        return decrease
    }

    async sortByRoomsCountDecrease() {
        let decrease = await RoomType.aggregate([
            {$match:{floor:{$gte:3}}},
            {$sort :{roomsCount:-1}}
        ])
        return decrease
    }

    async sortByPriceIncrease() {
        let increase = await RoomType.aggregate([
            {$match:{floor:{$gte:3}}},
            {$sort: {price: 1}}
            //{$project: {price:1, _id:1}}
        ])
        return increase
    }

    async sortByAreaIncrease() {
        let increase = await RoomType.aggregate([
            {$match:{floor:{$gte:3}}},
            {$sort: { area: 1 }}
            //{$project: {price:1, _id:1}}
        ])
        return increase
    }

    async sortByRoomsCountIncrease() {
        let increase = await RoomType.aggregate([
            {$match:{floor:{$gte:3}}},
            {$sort: { roomsCount: 1 }}
            //{$project: {price:1, _id:1}}
        ])
        return increase
    }
}

module.exports = new sortService()