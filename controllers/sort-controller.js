const sortService = require("../services/sort-service")

class sortController {
    async sortByPriceDecrease(req, res) {
        try {
            let decrease = await sortService.sortByPriceDecrease()
            res.json(decrease)
        } catch(error) {
            res.status(500).json({err:error})
        }
    }

    async sortByAreaDecrease(req, res) {
        try {
            let decrease = await sortService.sortByAreaDecrease()
            res.json(decrease)
        } catch(error) {
            res.status(500).json({err:error})
        }
    }

    async sortByRoomsCountDecrease(req, res) {
        try {
            let decrease = await sortService.sortByRoomsCountDecrease()
            res.json(decrease)
        } catch(error) {
            res.status(500).json({err:error})
        }
    }

    async sortByPriceIncrease(req, res) {
        try {
            let increase = await sortService.sortByPriceIncrease()
            res.json(increase)
        } catch(err) {
            res.status(500).json({err:err})
        }
    }

    async sortByAreaIncrease(req, res) {
        try {
            let increase = await sortService.sortByAreaIncrease()
            res.json(increase)
        } catch(err) {
            res.status(500).json({err:err})
        }
    }

    async sortByRoomsCountIncrease(req, res) {
        try {
            let increase =  await sortService.sortByRoomsCountIncrease()
            res.json(increase)
        } catch(err) {
            res.status(500).json({err:err})
        }
    }
}

module.exports = new sortController()